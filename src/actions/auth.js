import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { clientLogout } from "./passports";



export const startLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(authCheckingStart());
        try {
            const resp = await fetchSinToken('auth/login', { email, password }, 'POST')
            const body = await resp.json();
            dispatch(authCheckingFinish())
            if (body.ok) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({
                    id: body.id,
                    name: body.name
                }
                ))
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: body.msg,
                    icon: 'error'
                });
            }
        } catch (error) {
            dispatch(authCheckingFinish())
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }



    }
}


export const startChecking = () => {
    return async (dispatch) => {
       if (localStorage.getItem('token')) {
        console.log(localStorage.getItem('token')) ;
        dispatch(authCheckingStart())
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();
        console.log(body)

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                id: body.id,
                name: body.name
            }

            ))
            dispatch(authCheckingFinish())
        }
        else {
            dispatch(authCheckingFinish())
        }
       }
    }
}

const authCheckingStart = () => ({ type: types.authCheckingStart })
const authCheckingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({

    type: types.authLogin,
    payload: user
})


export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(clientLogout())
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
})



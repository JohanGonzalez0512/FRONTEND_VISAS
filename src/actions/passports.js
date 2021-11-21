import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { prepareClientsPassport } from "../helpers/prepareClientsPassport";


export const clientsStartLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchConToken('clientes/pasaporte');
            const body = await resp.json()

            const clients = prepareClientsPassport(body.clients);

            dispatch(clientsLoaded(clients));

        } catch (error) {
            Swal.fire('Error',  'Hablar con el administrador', 'error')
        }

    }
}


export const clientStartCreation = (client) => {
    return async (dispatch) => {
        try {

            const res = await fetchConToken('clientes/pasaporte', client, 'POST')
            const body = await res.json();
            if (body.ok) {

                dispatch(addNewClient(client))
                Swal.fire({
                    title: '¡Genial!',
                    text: body.msg,
                    icon: 'success',
                })
            }
            else {
                console.log(body.msg)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {

            Swal.fire('Error',  'Hablar con el administrador', 'error')
        }
    }
}

export const startUpdatingClient = (client) => {
    return async (dispatch, getState) => {
        try {
            const { activeClient } = getState().passport
            const res = await fetchConToken(`clientes/pasaporte/${activeClient.id_client}`, client, 'PUT')
            const body = await res.json();
            if (body.ok) {
               dispatch(clientUpdated({
                   id_client:client.id_client,
                   name: client.name,
                   address: client.address,
                   phone_number: client.phone_number,
                   date_expiration : client.date_expiration
               }))      
                Swal.fire({
                    title: '¡Genial!',
                    text: body.msg,
                    icon: 'success',
                })
            }
            else {
                console.log(body.msg)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',  'Hablar con el administrador', 'error')
        }
    }
}

export const startClientDelete = () => {
    return async (dispatch, getState) => {
        try {
            const { activeClient } = getState().passport
            const res = await fetchConToken(`clientes/${activeClient.id_client}`, {}, 'DELETE')
            const body = await res.json();
            if (body.ok) {
               dispatch(clientDeleted())     
                Swal.fire({
                    title: '¡Genial!',
                    text: body.msg,
                    icon: 'success',
                })
            }
            else {
                console.log(body.msg)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error',  'Hablar con el administrador', 'error')
            
        }
    }
}


export const setClientActive = (client) => ({
    type: types.passSetClientActive,
    payload: client
})

const addNewClient = (client) => ({
    type: types.passNewClient,
    payload: client
})

const clientUpdated = (client) => ({
    type: types.passUpdate,
    payload: client
});


const clientsLoaded = (clients) => ({
    type: types.passLoadClients,
    payload: clients
})

export const clientLogout = () => ({ type: types.passCleaning})



export const clientDeleted = () => ({ type: types.passDelete });

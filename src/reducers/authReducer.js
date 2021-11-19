import { types } from "../types/types";

const initialState = {
    user: {

    },
    logged: false,
    checking: false,
    // id: null,
    // nsmr

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                user: { ...action.payload },
                logged: true
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authCheckingStart:
            return {
                ...state,
                checking: true
            }
        case types.authLogout:
            return {
                ...state,
                user: {},
                logged: false,
            }

        default:
            return state;
    }
}
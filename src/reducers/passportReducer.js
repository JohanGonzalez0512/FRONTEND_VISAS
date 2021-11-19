import { types } from "../types/types";

const initialState = {

    clients: [],
    activeClient: null,
}
export const passportReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.passLoadClients:
            return {
                ...state,
                clients: [...action.payload]
            }
        case types.passSetClientActive:
            return {
                ...state,
                activeClient: action.payload

            }

        case types.passNewClient:
            return {
                ...state,
                clients: [action.payload, ...state.clients]
            }
        case types.passUpdate:
            return {
                ...state,
                clients: state.clients.map(
                    client => client.id_client === action.payload.id
                        ? action.payload
                        : client
                ),
                activeClient: null
            }

        case types.passDelete:
            return {
                ...state,
                clients: state.clients.filter(
                    clients => (clients.id_client !== state.activeClient.id_client)),
                activeClient: null,
            }

        case types.passCleaning:
            return {
              ...initialState
            }

        default:
            return state;
    }
}
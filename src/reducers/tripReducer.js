import { types } from "../types/types";

const initialState = {

    trips: [],
    clients: [],
    activeTrip: null,
    activeClient: null,
}
export const tripReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.tripsLoadingTrips:
            return {
                ...state,
                trips: [...action.payload],

            }
        case types.tripsLoadingClients:
            return {
                ...state,
                clients: [...action.payload]
            }

        case types.tripsSetActiveTrip:
            return {
                ...state,
                activeTrip: action.payload
            }
        case types.tripsSetActiveClient:
            return {
                ...state,
                activeClient: action.payload
            }


        case types.tripsAddNewTrip:
            return {
                ...state,
                trips: [action.payload, ...state.trips]
            }

        case types.tripsAddNewClient:
            return {
                ...state,
                clients: [action.payload, ...state.clients]
            }

        case types.tripsUpdatedTrip:
            return {
                ...state,
                trips: state.trips.map(
                    trip => trip.id_trip === action.payload.id
                        ? action.payload
                        : trip
                ),
                activeTrip: null
            }
        case types.tripsUpdatedClient:
            return {
                ...state,
                clients: state.clients.map(
                    client => client.id_client === action.payload.id
                        ? action.payload
                        : client
                ),
                activeClient: null
            }




        case types.tripsDeletedTrip:
            return {
                ...state,
                trips: state.trips.filter(
                    trips => (trips.id_trip !== state.trips.id_trip)),
                activeTrip: null
            }
        case types.tripsDeletedClient:
            return {
                ...state,
                clients: state.clients.filter(
                    clients => (clients.id_client !== state.clients.id_client)),
                activeClient: null
            }
        case types.tripsLogout:
            return {
                ...initialState
            }


        default:
            return state;
    }
}
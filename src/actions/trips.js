import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { prepareClientsVisa } from "../helpers/prepareClientsVisa";


export const clientsStartLoading = (date) => {
    return async (dispatch) => {
       

        try {

            const resp = await fetchConToken(`clientes/visa-fecha/${date}`);
           
            const body = await resp.json()
            
            if (body.ok) {
                const {trip} = body
                console.log(trip)
                dispatch(setTripActive(trip))
                const clients = prepareClientsVisa(body.clients);
    
    
                dispatch(clientsLoaded(clients));

            }
            else{
                console.log(body.msg)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }


        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }

    }
}


export const clientStartCreation = (client) => {
    return async (dispatch) => {
        try {
           

            const res = await fetchConToken('clientes/visa', client, 'POST')
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
            const { activeClient } = getState().trip
            console.log(client)
            const res = await fetchConToken(`clientes/visa/${activeClient.id_client}`, client, 'PUT')
            const body = await res.json();
            if (body.ok) {
               dispatch(clientUpdated({
                   id_client:client.id_client,
                   name: client.name,
                   address: client.address,
                   phone_number: client.phone_number,
                   date_expiration : client.date_expiration,
                   accepted: client.accepted
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
            const { activeClient } = getState().trip
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
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')

        }
    }
}

export const tripsStartLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchConToken('viajes');
            const body = await resp.json()

            // const trips = prepareClientsPassport(body.clients);

            dispatch(tripsLoaded(body.trips.map(trip => {
                return {

                    id_trip: trip.id_trip,
                    date: trip.date,
                    limit_people: trip.limit_people
                }

            })));

        } catch (error) {
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }

    }
}

export const tripStartCreation = (trip) => {
    return async (dispatch) => {
        try {

            const res = await fetchConToken('viajes', trip, 'POST')
            const body = await res.json();
            if (body.ok) {

                dispatch(addNewTrip(trip))
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

            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}


export const startUpdatingTrip = (trip) => {
    return async (dispatch, getState) => {
        try {
            const { activeTrip } = getState().trip
            const res = await fetchConToken(`viajes/${activeTrip.id_trip}`, trip, 'PUT')
            const body = await res.json();
            if (body.ok) {

                dispatch(tripUpdated(trip))
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
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

export const startTripDelete = () => {
    return async (dispatch, getState) => {
        try {
            const { activeTrip } = getState().trip
            const res = await fetchConToken(`viajes/${activeTrip.id_trip}`, {}, 'DELETE')
            const body = await res.json();
            if (body.ok) {
                dispatch(tripDeleted())
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
            Swal.fire('Error', 'Hablar con el administrador', 'error')

        }
    }
}









export const setClientActive = (client) => ({
    type: types.tripsSetActiveClient,
    payload: client
})
export const setTripActive = (trip) => ({
    type: types.tripsSetActiveTrip,
    payload: trip
})

const addNewTrip = (trip) => ({
    type: types.tripsAddNewTrip,
    payload: trip
})

const addNewClient = (client) => ({
    type: types.tripsAddNewClient,
    payload: client
})

const clientUpdated = (client) => ({
    type: types.tripsUpdatedClient,
    payload: client
});

const tripUpdated = (trip) => ({
    type: types.tripsUpdatedTrip,
    payload: trip
});


const clientsLoaded = (clients) => ({
    type: types.tripsLoadingClients,
    payload: clients
})
const tripsLoaded = (trips) => ({
    type: types.tripsLoadingTrips,
    payload: trips
})


export const clientDeleted = () => ({ type: types.tripsDeletedClient });
export const tripDeleted = () => ({ type: types.tripsDeletedTrip });

export const tripLogout = () => ({ type: types.tripsLogout })
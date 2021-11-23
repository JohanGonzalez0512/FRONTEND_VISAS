import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setTripActive, tripsStartLoading, startTripDelete } from "../../actions/trips";
import IconList from "../IconList"

export default function TripsHistory() {



    const dispatch = useDispatch();
    const { trips } = useSelector(state => state.trip)
    
    useEffect(() => {

        dispatch(tripsStartLoading());

    }, [dispatch])

    const handleDelete = (trip) => {

        dispatch(setTripActive(trip))
        dispatch(startTripDelete(trip))
    }

    const handleEdit = (trip) => {
        dispatch(setTripActive(trip))
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Historial de Viajes
                </h1>

                <IconList
                    data={trips}
                    headers={['Fecha', 'Límite de personas']}
                    deleteLink="./borrar/"
                    editLink="/editar-viaje"
                    idPropName='id_trip'
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    filterProp="date"
                    searchInputType="date"
                    searchInputLabel="Filtrar por fecha"
                />
            </div>


        </div>
    )
}

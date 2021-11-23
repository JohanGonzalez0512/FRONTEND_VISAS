import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clientsStartLoading, setClientActive, startClientDelete } from "../../actions/trips"
import IconList from "../IconList"

export default function Trips() {


    
    const { activeTrip, clients } = useSelector(state => state.trip)
    const dispatch = useDispatch();
    const handleChangeDispatch = (date) => {
        dispatch(clientsStartLoading(date))
    }
    // useEffect(() => {

    //     dispatch(paymentsStartLoading());

    // }, [dispatch])

    const handleDelete = (client) => {
        dispatch(setClientActive(client))
        dispatch(startClientDelete())
    }

    const handleEdit = (client) => {
        dispatch(setClientActive(client))
        // dispatch()
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Clientes viaje
                </h1>

                <IconList
                    data={clients}
                    headers={['Nombre', 'Número', 'Dirección','Fecha de expiracion', 'Status']}
                    deleteLink="./borrar/"
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    editLink="/clientes/editar-client-visa"
                    idPropName='id_client'
                    filterProp="name"
                    handleChangeFunction={handleChangeDispatch}
                    searchInputType="text"
                    searchInputLabel="Filtrar por nombre"
                    searchInputType2="date"
                    searchInputLabel2="Buscar viaje por fecha"
                />
                {
                    (activeTrip) && (

                        <div className="buttons">

                            <Link
                                to='/clientes/crear-cliente-visa'
                                // onClick={} --> aquí vas a poner tu función para cambiar el [data] que le mandas al IconList
                                className="btn">
                                Añadir cliente a un viaje
                            </Link>
                        </div>
                    )
                }
            </div>


        </div>
    )
}

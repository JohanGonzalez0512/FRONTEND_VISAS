import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clientsStartLoading, setClientActive, startClientDelete } from "../../actions/passports";
import IconList from "../IconList"

export default function Passports() {


    const dispatch = useDispatch()
    let { clients } = useSelector(state => state.passport)
    useEffect(() => {

        dispatch(clientsStartLoading());

    }, [ dispatch ])
    const handleDelete =  (client)=> {
        
        dispatch(setClientActive(client))
        dispatch(startClientDelete(client))
    }

    const handleEdit = (client)=>{
        dispatch(setClientActive(client))
    }
  
    

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Pasaportes Clientes
                </h1>

                <IconList
                    data={clients}
                    handleEdit={handleEdit}
                    headers={[, 'Nombre', 'Dirección', 'Numero', 'Fecha de expiración']}
                    deleteLink="./borrar/"
                    editLink="/clientes/editar-client-pasaporte"
                    idPropName='id_client'
                    filterProp="name"
                    searchInputType="text"
                    searchInputLabel="Filtrar por nombre"
                    handleDelete={handleDelete}
                />

                <div className="buttons">
                    <Link
                        to='/viajes/crear-cliente'
                        // onClick={} --> aquí vas a poner tu función para cambiar el [data] que le mandas al IconList
                        className="btn">
                        Añadir clientes al viaje
                    </Link>
                </div>
            </div>


        </div>
    )
}

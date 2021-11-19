import { Link } from "react-router-dom"
import IconList from "../IconList"

export default function Trips() {

    const data = [
        {
            _id: 1,
            name: 'Johan Israel',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            status: 'aceptado'
        },
        {
            _id: 2,
            name: 'Rick Sánchez',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            status: 'aceptado'
        },
        {
            _id: 3,
            name: 'Ángel Cruz',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            status: 'aceptado'
        },
        {
            _id: 4,
            name: 'Eduardo Retana',
            phoneNumber: '6181234567',
            address: 'Huizache 1',
            status: 'aceptado'
        }
    ]

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Clientes viaje
                </h1>

                <IconList
                    data={data}
                    headers={['Nombre', 'Número', 'Dirección', 'Status']}
                    deleteLink="./borrar/"
                    editLink="/clientes/editar-client-visa"
                    idPropName='_id'
                    filterProp="name"
                    searchInputType="text"
                    searchInputLabel="Filtrar por nombre"
                    searchInputType2="date"
                    searchInputLabel2="Buscar viaje por fecha"
                />

                <div className="buttons">
                    <Link
                        to='/clientes/crear-cliente-visa'
                        // onClick={} --> aquí vas a poner tu función para cambiar el [data] que le mandas al IconList
                        className="btn">
                        Añadir clientes al viaje
                    </Link>
                </div>
            </div>


        </div>
    )
}

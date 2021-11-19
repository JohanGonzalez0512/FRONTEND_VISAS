import IconList from "../IconList"

export default function TripsHistory() {

    const data = [
        {
            _id: 1,
            date: '06/11/2021',
            dispId: 1,
            limit: 40,
        },
        {
            _id: 2,
            date: '03/11/2021',
            dispId: 2,
            limit: 40,
        },
        {
            _id: 3,
            date: '22/11/2021',
            dispId: 3,
            limit: 40,
        },
    ]

    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Historial de Viajes
                </h1>

                <IconList
                    data={data}
                    headers={['Fecha', 'Id', 'Límite']}
                    deleteLink="./borrar/"
                    editLink="./editar/"
                    idPropName='_id'
                    filterProp="date"
                    searchInputType="date"
                    searchInputLabel="Filtrar por fecha"
                />
            </div>


        </div>
    )
}

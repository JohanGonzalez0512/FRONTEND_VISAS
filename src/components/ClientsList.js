import { useEffect, useState } from "react"

export default function ClientsList({ client, setClient, clients }) {


    const [dispClients, setDispClients] = useState(clients);
    const [searchClient, setSearchClient] = useState('');

    useEffect(() => {
        setDispClients(clients)
        
    }, [clients])
    const handleOnChange = e => {

        const tempSearch = e.target.value;
        setSearchClient(tempSearch);

        if (!tempSearch.length) {
            setDispClients(clients);
            return;
        }

        const tempClients = clients.filter(({ name }) => name.toLowerCase().includes(tempSearch.toLowerCase()))

        setDispClients(tempClients);

    }

    return (
        <div className="clients-list">
            <h3 className="clients-list__title">
                Cliente
            </h3>
            <div className="clients-list__input">
                <input type="text" value={searchClient} onChange={handleOnChange} />
            </div>
            <div className="clients-list__list scroll">
                {
                    dispClients.map(client => (
                        <div
                            key={client.id_client}
                            onClick={e => setClient(client)}
                            className="item">
                            <p>{`${client.name}`}</p>
                        </div>
                    ))
                }
            </div>
            {
                client.name && (
                    <p className="clients-list__chosen">
                        {`${client.name}`}
                    </p>
                )
            }
        </div>
    )
}

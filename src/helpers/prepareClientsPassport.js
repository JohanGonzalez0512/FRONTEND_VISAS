export const prepareClientsPassport = (body = [])=> {

    let clients= body.map(c => {
        const {client, passport_info} = c
        return {
            id_client: client.id_client,
            name: `${client.name} ${client.last_name}`,
            address: client.address,
            phone_number: client.phone_number,
            date_expiration: (passport_info.date_expiration)?passport_info.date_expiration:'no definida'

        }
        
    })
    return clients
}
export const prepareClientsVisa = (body = [])=> {

    let clients= body.map(c => {
        const {client, visa_info} = c
        return {
            id_client: client.id_client,
            name: `${client.name} ${client.last_name}`,
            address: client.address,
            phone_number: client.phone_number,
            date_expiration: (visa_info.date_expiration)?visa_info.date_expiration:'no definida',
            accepted:(visa_info.accepted===0)?'No aceptada':'Aceptada'

        }
        
    })
    return clients
}
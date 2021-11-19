export const preparePayments = (body = []) => {

    let payments = body.map(p => {
        const { amount, description, date, type } = p
        if (type === 'Pago') {

            return {
                id_income: p.id_income,
                type,
                description,
                amount,
                date,

            }

        }
        else {
            return {
                id_expense : p.id_expense,
                type,
                description,
                amount,
                date,
              
               
            }

        }


    })
    return payments
}
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { preparePayments } from "../helpers/preparePayments";



export const paymentsStartLoading = (monthAndYear) => {
    return async (dispatch) => {

        try {
            let resp
            if (monthAndYear) {

                let monthAndYearString = monthAndYear.toString()
                monthAndYearString = monthAndYearString.split('-')
                resp = await fetchConToken(`pagos/con-gastos?month=${parseInt(monthAndYearString[1])}&year=${parseInt(monthAndYearString[0])}`);


            }
            else {
                resp = await fetchConToken('pagos/con-gastos');
            }
            const body = await resp.json()
            const payments = preparePayments(body.payments);

            dispatch(setTotalIncomesWithExpenses(body.totalPaymentsWithExpenes))
            dispatch(setTotalExpenses(body.totalExpenses))
            dispatch(setTotalIncomes(body.totalIncomes));
            dispatch(paymentsLoaded(payments));

        } catch (error) {
            console.log(error)
        }

    }
}


export const IncomeStartCreation = (income, id_client) => {
    return async (dispatch) => {
        try {
            console.log(income)
            console.log(id_client)

            const res = await fetchConToken(`pagos/${id_client}`, income, 'POST')
            const body = await res.json();
            if (body.ok) {

                dispatch(addNewIncome(income))
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

export const ExpenseStartCreation = (expense) => {
    return async (dispatch) => {
        try {


            const res = await fetchConToken(`gastos`, expense, 'POST')
            const body = await res.json();
            if (body.ok) {

                dispatch(addNewExpense(expense))
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

export const startLoadingCLientNames = () => {
    return async (dispatch) => {
        const res = await fetchConToken('clientes')
        let body = await res.json();
        console.log(body)
        const names = body.clients.map(client => {
            const { name, id_client } = client;
            return {
                name,
                id_client
            }
        })
        dispatch(payLoadClientsName(names))
    }
}

export const startUpdatingIncomeAndExpense = (payment) => {
    return async (dispatch, getState) => {
        try {
            let { activePayment } = getState().payment

            if (activePayment.type === 'Pago') {
              
                const {id_income} = activePayment

                const res = await fetchConToken(`pagos/${id_income}`, payment, 'PUT')
                const body = await res.json();
                if (body.ok) {

                    dispatch(incomeUpdated({
                        description: payment.description,
                        date: payment.date,
                        amount: payment.amount,
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
            } else {
                const {id_expense} = activePayment
                const res = await fetchConToken(`gastos/${id_expense}`, payment, 'PUT')
                const body = await res.json();
                if (body.ok) {

                    dispatch(expenseUpdated({
                        description: payment.description,
                        date: payment.date,
                        amount: payment.amount,
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

            }

        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

// export const startClientDelete = () => {
//     return async (dispatch, getState) => {
//         try {
//             const { activeClient } = getState().passport
//             const res = await fetchConToken(`clientes/${activeClient.id_client}`, {}, 'DELETE')
//             const body = await res.json();
//             if (body.ok) {
//                 dispatch(clientDeleted())
//                 Swal.fire({
//                     title: '¡Genial!',
//                     text: body.msg,
//                     icon: 'success',
//                 })
//             }
//             else {
//                 console.log(body.msg)
//                 Swal.fire({
//                     title: '¡Oops!',
//                     text: body.msg,
//                     icon: 'question',
//                 })
//             }
//         } catch (error) {
//             console.log(error)
//             Swal.fire('Error', 'Hablar con el administrador', 'error')

//         }
//     }
// }

const payLoadClientsName = (names) => ({
    type: types.payLoadClientsName,
    payload: names
})


export const setActivePayment = (income) => ({
    type: types.paySetActivePayment,
    payload: income
})

const addNewIncome = (income) => ({
    type: types.payAddNewIncome,
    payload: income
})
const addNewExpense = (expense) => ({
    type: types.payAddNewExpense,
    payload: expense
})

const incomeUpdated = (income) => ({
    type: types.payUpdatedIncome,
    payload: income
});

const expenseUpdated = (expense) => ({
    type: types.payUpdatedExpense,
    payload: expense
});

const setTotalIncomesWithExpenses = (total) => ({
    type: types.paySetTotalExpensesWithIncomes,
    payload: total
})
const setTotalIncomes = (total) => ({
    type: types.paySetTotalIncomes,
    payload: total
})
const setTotalExpenses = (total) => ({
    type: types.paySetTotalExpenses,
    payload: total
})


const paymentsLoaded = (payments) => ({
    type: types.payLoadPayments,
    payload: payments
})

export const paymentsLogout = () => ({ type: types.paycleaning })

export const paymentDeleted = () => ({ type: types.payDeletedIncome });

export const expenseDeleted = () => ({ type: types.payDeletedExpense });

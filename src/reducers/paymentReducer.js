import { types } from "../types/types";

const initialState = {

    paymentsWithExpenses: [],
    activePayment: null,
    totalPaymentsWithExpenses: null,
    totalPayments: null,
    totalExpenses: null,
    clientsName: []

}
export const paymentReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.payLoadPayments:
            return {
                ...state,
                paymentsWithExpenses: [...action.payload],

            }
        case types.payLoadClientsName:
            return {
                ...state,
                clientsName: [...action.payload]
            }
        case types.paySetActivePayment:
            return {
                ...state,
                activePayment: action.payload
            }


        case types.paySetTotalExpenses:
            return {
                ...state,
                totalExpenses: action.payload
            }
        case types.paySetTotalExpensesWithIncomes:
            return {
                ...state,
                totalPaymentsWithExpenses: action.payload
            }
        case types.paySetTotalIncomes:
            return {
                ...state,
                totalPayments: action.payload
            }

        case types.payAddNewIncome:
            return {
                ...state,
                paymentsWithExpenses: [action.payload, ...state.paymentsWithExpenses]
            }

        case types.payAddNewExpense:
            return {
                ...state,
                paymentsWithExpenses: [action.payload, ...state.paymentsWithExpenses]
            }

        case types.payUpdatedIncome:
            return {
                ...state,
                paymentsWithExpenses: state.paymentsWithExpenses.map(
                    income => income.id_income === action.payload.id
                        ? action.payload
                        : income
                ),
                activePayment: {
                    type: 'Pago'
                }
            }

        case types.payUpdatedExpense:
            return {
                ...state,
                paymentsWithExpenses: state.paymentsWithExpenses.map(
                    expense => expense.id_expense === action.payload.id
                        ? action.payload
                        : expense
                ),
                activePayment: {
                    type: 'Gasto'
                }
            }


        case types.payDeletedIncome:
            return {
                ...state,
                paymentsWithExpenses: state.paymentsWithExpenses.filter(
                    incomes => (incomes.id_income !== state.activePayment.id_income)),
                activePayment: null
            }


        case types.payDeletedExpense:
            return {
                ...state,
                paymentsWithExpenses: state.paymentsWithExpenses.filter(
                    expenses => (expenses.id_expense !== state.activePayment.id_expense)),
                activePayment: null
            }

        case types.paycleaning:
            return {
                ...initialState
            }


        default:
            return state;
    }
}
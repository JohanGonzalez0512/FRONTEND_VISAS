export const types = {
    


    authCheckingFinish: '[auth] Finish checking loging state',
    authStartLogin: '[auth] Start Login',
    authLogin: '[auth] Login',
    authStartForgotPassword: '[auth] Start forgot password',
    authLogout: '[auth] Logout',
    authStartTokenRenew: '[auth] Start token renew',
    authCheckingStart: '[auth] authChecking start',

    passNewClient: '[passports] create a client passport',
    passLoadClients: '[passports] get clients',
    passUpdate: '[passports] update client',
    passDelete: '[passports] delete client',
    passCleaning: '[passports] cleaning logout',
    passSetClientActive: '[passports] set client active',


    payAddNewIncome: '[payment] create an income',
    payUpdatedIncome: '[payment] update an income',
    payDeletedIncome: '[payment] delete an income',
    paySetActivePayment: '[payment] set active an income',

    paycleaning: '[payment] cleaning logout',
    payLoadPayments: '[payment] load expenses and incomes',
    paySetTotalExpensesWithIncomes: '[payment] set total payments and expenses',
    paySetTotalExpenses: '[payment] set total expenses',
    paySetTotalIncomes: '[payment] set total incomes',
    payLoadClientsName: '[payment] load all the clients name',

    payAddNewExpense: '[payment] create an expense',
    payUpdatedExpense: '[payment] update an expense',
    payDeletedExpense: '[payment] delete an expense',


}
export const types = {
    


    authCheckingFinish: '[auth] Finish checking loging state',
    authStartLogin: '[auth] Start Login',
    authLogin: '[auth] Login',
    authSetEmail: '[auth] Send email',
    authSetCodeAndPassword: '[auth] Send code and password',
    authForgotPasswordCleaning:'[auth] Cleaning ForgotPassword ',
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



    tripsLoadingTrips: '[trips] Load trips',
    tripsAddNewTrip: '[trips] create a trip',
    tripsUpdatedTrip: '[trips] update a trip',
    tripsDeletedTrip: '[trips] delete a trip',
    tripsSetActiveTrip: '[trips] set active a trip',

    tripsLoadingClients: '[trips] Load clients',
    tripsAddNewClient: '[trips] create a client',
    tripsUpdatedClient: '[trips] update a client',
    tripsDeletedClient: '[trips] delete a client',
    tripsSetActiveClient: '[trips] set active a client',
    tripsLogout: '[trips] trips logout'


}
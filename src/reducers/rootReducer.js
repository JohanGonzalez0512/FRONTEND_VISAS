import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { passportReducer } from "./passportReducer";
import { paymentReducer } from "./paymentReducer";

export const rootReducers =  combineReducers({
    auth: authReducer,
    passport: passportReducer,
    payment: paymentReducer
})
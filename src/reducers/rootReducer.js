import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { passportReducer } from "./passportReducer";
import { paymentReducer } from "./paymentReducer";
import { tripReducer } from "./tripReducer";

export const rootReducers =  combineReducers({
    auth: authReducer,
    passport: passportReducer,
    payment: paymentReducer,
    trip: tripReducer
})
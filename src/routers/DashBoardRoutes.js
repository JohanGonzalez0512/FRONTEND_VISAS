import React from 'react'
import {  Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/pages/Home'
import Clients from "../components/pages/Clients";
import CreateClientPassport from "../components/pages/CreateClientPassport";
import CreateClientVisa from "../components/pages/CreateClientVisa";
import CreatePayment from "../components/pages/CreatePayment";
import CreateSpending from "../components/pages/CreateSpending";
import EditClientVisa from "../components/pages/EditClientVisa";
import Passports from "../components/pages/Passports";
import Payments from "../components/pages/Payments";
import Trips from "../components/pages/Trips";
import TripsHistory from "../components/pages/TripsHistory";
import EditClientPassport from '../components/pages/EditClientPassport';
import EditSpending from '../components/pages/EditSpending';
import CreateTrip from '../components/pages/CreateTrip';
import EditTrip from '../components/pages/EditTrip';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/clientes/crear-cliente-pasaporte" component={CreateClientPassport} />
                <Route exact path="/clientes/crear-cliente-visa" component={CreateClientVisa} />
                <Route exact path="/pagos" component={Payments} />
                <Route exact path="/viajes" component={Trips} />
                <Route exact path="/clientes/editar-client-visa" component={EditClientVisa} />
                <Route exact path="/clientes/editar-client-pasaporte" component={EditClientPassport} />
                <Route exact path="/clientes" component={Clients} />
                <Route exact path="/pasaportes" component={Passports} />
                <Route exact path="/viajes/historial" component={TripsHistory} />
                <Route exact path="/crear-gasto" component={CreateSpending} />
                <Route exact path="/editar-gasto" component={EditSpending} />
                <Route exact path="/crear-pago" component={CreatePayment} />
                <Route exact path="/crear-viaje" component={CreateTrip} />
                <Route exact path="/editar-viaje" component={EditTrip} />
                <Redirect to='/' />
            </Switch>
        </>
    )
}
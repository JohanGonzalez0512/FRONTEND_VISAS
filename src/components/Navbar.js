import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../helpers/resources/images/logo.png';
import {ReactComponent as UserSVG} from '../helpers/resources/images/user.svg';
import {ReactComponent as PlaneSVG} from '../helpers/resources/images/plane.svg';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';

export default function Navbar() {

   

    const [active, setActive] = useState(false);
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = ()=> {
        dispatch( startLogout())
    }
    return (
        <>
            <div
                onClick={e => setActive(!active)}
                className={`phoneNav ${active && 'active'}`}>
                <PlaneSVG/>
               
            </div>
            <nav className={`navbar ${active && 'active'}`}>
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="navbar__user">
                     <UserSVG/>
                   
                    <p className="name">
                        {(user.name) && user.name}
                    </p>
                </div>
                <div className="navbar__group-links">
                    <div className="group">
                        <div className="link">
                            <Link className="main-link" to="/viajes">Viajes</Link>
                            <Link to="/crear-viaje">Crear Viaje</Link>
                            <Link to="/viajes/historial">Historial de viajes</Link>

                        </div>
                        <div className="link">
                            <Link className="main-link" to="/pasaportes">Pasaportes</Link>
                            <Link to="/clientes/crear-cliente-pasaporte">Crear cliente</Link>
                           

                        </div>
                        <div className="link">
                            <Link className="main-link" to='/pagos'>Pagos</Link>
                            <Link to="/crear-pago">Crear pago</Link>
                            <Link to="/crear-gasto">Crear gasto</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar__logout">
                    <p onClick={handleLogout}> Cerrar sesión</p>
                </div>
            </nav>
        </>
    )
}

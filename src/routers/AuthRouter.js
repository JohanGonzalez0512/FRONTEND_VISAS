import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/pages/Login'
import RecoverPwd from '../components/pages/RecoverPwd'

export const AuthRouter = () => {

    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={Login}
                />

                <Route
                    exact
                    path="/auth/forgot-password"
                    component={RecoverPwd}
                />
                <Redirect to="/auth/login" />

            </Switch>
        </div>


    )
}
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/pages/Login'
import RecoverPwd from '../components/pages/RecoverPwd'
import SetPwd from '../components/pages/SetPwd'

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
                <Route
                    exact
                    path="/auth/restore-password"
                    component={SetPwd}
                />
                <Redirect to="/auth/login" />

            </Switch>
        </div>


    )
}
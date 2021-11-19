import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from "../actions/auth";
import { AuthRouter } from "./AuthRouter";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
    // const [isLoggedOn, setstate] = useState(initialState)
    const dispatch = useDispatch()
    const { logged } = useSelector(state => state.auth);

    useEffect(() => {

         dispatch(startChecking())

    }, [dispatch])


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute

                        path="/auth"
                        isAuthenticated={logged}
                        component={AuthRouter}
                    />
                    <PrivateRoute
                       
                        path="/"
                        isAuthenticated={logged}
                        component={DashBoardRoutes}
                    />


                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router>
    )
}



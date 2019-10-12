import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_LANDING_PAGE,PATH_ROOT, PATH_LOGIN_PAGE } from "../utils/paths"
import LandingPage from "../containers/LandingPage"
import LoginPage from "../containers/LoginPage"
import { NotFound } from "../containers/Result"
import AppLayout from '../layouts'

const DataRoute = [
    {
        key : "root",
        path: `${PATH_ROOT}`,
        component:AppLayout
    },
    { 
        key : "landing-page",
        path: `${PATH_LANDING_PAGE}`,
        component: LandingPage
    },
    { 
        key : "login-page",
        path: `${PATH_LOGIN_PAGE}`,
        component: LoginPage
    }
]

const AppRoute = () => { 
    return (
        <Router>
            <Switch>

                {
                    DataRoute.map(i => {
                        return <Route exact key={i.key} path={i.path} component={i.component} />
                    })
                }
                <Route exact component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRoute;
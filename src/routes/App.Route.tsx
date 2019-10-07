import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_LANDING_PAGE,PATH_ROOT } from "../utils/paths"
import LandingPage from "../containers/LandingPage"
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
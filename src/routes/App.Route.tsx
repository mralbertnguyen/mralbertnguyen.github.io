import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PATH_LANDING_PAGE } from "../utils/paths";
import LandingPage from "../containers/LandingPage";
import { NotFound } from "../containers/Result"
const DataRoute = [
    {
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
                        return <Route exact path={i.path} component={i.component} />
                    })
                }

                <Route exact component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRoute;
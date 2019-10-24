import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_LANDING_PAGE,PATH_ROOT, PATH_LOGIN_PAGE, PATH_FUNCTION_PAGE, PATH_BLOG_PAGE } from "../utils/paths"
import { NotFound } from "../containers/Result"
import AppLayout from '../layouts'

import LandingPage from "../containers/LandingPage"
import LoginPage from "../containers/LoginPage"
import FunctionPage from "../containers/FunctionPage"
import BlogPage from "../containers/BlogPage"

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
    },
    { 
        key : "function-page",
        path: `${PATH_FUNCTION_PAGE}`,
        component: FunctionPage,
    },
    { 
        key : "blog-page",
        path: `${PATH_BLOG_PAGE}`,
        component: BlogPage,
    },
    
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
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_ROOT, PATH_BLOG_PAGE } from "../utils/paths"
import { NotFound } from "../containers/Result"
import AppLayout from '../layouts'

import BlogPage from "../containers/BlogPage"

const DataRoute = [
    {
        key : "root",
        path: `${PATH_ROOT}`,
        component:AppLayout
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
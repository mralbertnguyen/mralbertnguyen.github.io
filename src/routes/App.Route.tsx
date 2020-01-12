import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_ROOT, PATH_BLOG_PAGE, PATH_SHOP_PAGE } from "../utils/paths"
import { NotFound } from "../containers/Result"
import AppLayout from '../layouts'

import BlogPage from "../containers/BlogPage"
import ShopPage from "../containers/ShopPage"

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
    { 
        key : "shop-page",
        path: `${PATH_SHOP_PAGE}`,
        component: ShopPage,
    },
    
]

const AppRoute = () => { 
    return (
        <Router basename={process.env.PUBLIC_URL}>
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
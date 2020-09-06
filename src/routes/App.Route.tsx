import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH_ROOT} from "../utils/paths"
import { NotFound } from "../containers/NotFound"
import AppLayout from '../layouts'

// import DatePage from "../containers/DatePage"
const DataRoute = [
    {
        key : "root",
        path: `${PATH_ROOT}`,
        component:AppLayout
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
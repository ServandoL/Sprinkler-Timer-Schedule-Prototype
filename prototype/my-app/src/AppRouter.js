import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./screens/home";
import BasicScheduler from "./screens/basicSchedule"

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/basic-schedule" exact>
                    <BasicScheduler></BasicScheduler>
                </Route>
            </Switch>
        </Router>
    )
}
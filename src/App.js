import React from 'react';
import {routes} from "./routes";
import {Route, Switch} from "react-router-dom";
import Topbar from "./components/Topbar";

function App() {
    return (
        <React.Fragment>
            <Topbar/>
            <Switch>
                {routes.map((route, i) => (<Route exect path={route.path} component={route.component} key={i}/>))}
            </Switch>
        </React.Fragment>
    );
}

export default App;

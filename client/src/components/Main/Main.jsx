import React from "react";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import Home from "../Home";
import Sample from "../Sample";

const Main = () => {
    return (
        // TODO: configure in backend to apply BrowserRouter instead.
        <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sample" component={Sample}/>
        </HashRouter>
    );
};

export default Main;

import React from "react";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import Home from "../Home";
import Sample from "../Sample";

const Main = () => {
    console.log(process.env.NODE_ENV);
    return (
        // TODO: configure in backend to apply BrowserRouter instead.
        // maybe useful? https://segmentfault.com/q/1010000039034665
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sample" component={Sample}/>
        </BrowserRouter>
    );
};

export default Main;

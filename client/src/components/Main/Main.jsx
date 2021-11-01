import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";
import Sample from "../Sample";

const Main = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sample" component={Sample}/>
        </BrowserRouter>
    );
};

export default Main;

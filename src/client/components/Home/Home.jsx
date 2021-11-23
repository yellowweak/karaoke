import React from "react";
import { Link } from "react-router-dom";
// import _ from "lodash";

const endpoint = (process.env.NODE_ENV==="production")? "":"http://127.0.0.1:3000";

const Home = () => {
    // console.log(_.join(['Another', 'module', 'loaded!'], ' __'));
    console.log(process.env.NODE_ENV);
    import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
            console.log(_.join(['Another', 'module', 'loaded!'], ' 123'));
        }
    );
    fetch(endpoint+"/api/")
        .then(response => response.json())
        .then(obj => {console.log(obj.api)});
    return (
        <>
            <div>
                Awesome home page in {process.env.NODE_ENV} mode.
            </div>
            <div>
                <Link to="/sample">Goto sample page.</Link>
            </div>
        </>
    );
};

export default Home;
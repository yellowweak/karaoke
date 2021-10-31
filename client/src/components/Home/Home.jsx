import React from "react";
import { Link } from "react-router-dom";
// import _ from "lodash";

const Home = () => {
    // console.log(_.join(['Another', 'module', 'loaded!'], ' '));
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
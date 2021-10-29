import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>
                Awesome home page.
            </div>
            <div>
                <Link to="/sample">Goto sample page.</Link>
            </div>
        </>
    );
};

export default Home;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavbarHome = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="#" className="navbar-brand">
                    Spring Rain LTD
                </Link>
                <Link to="/login">
                    <button className="btn btn-success">Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavbarHome;

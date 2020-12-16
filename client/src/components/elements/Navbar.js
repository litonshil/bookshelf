import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Book Shelf
        </Link>
        <div>
          <Link to="/books" className="btn btn-light ml-auto">
            Create Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

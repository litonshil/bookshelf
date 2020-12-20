import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavbarHome from "../components/elements/NavbarHome";
import { logout } from "../store/actions/authActions";

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavbarHome />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Home);

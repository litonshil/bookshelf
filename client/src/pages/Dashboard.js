import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/elements/Navbar";
import { loadBooks } from "../store/actions/bookActions";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Books from "../components/books/Books";

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.loadBooks();
        // console.log(books);
    }
    render() {
        let { auth, books } = this.props;
        console.log("from dashboard", books);
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="py-3">
                        <Books />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    books: state.books,
});

export default connect(mapStateToProps, { loadBooks })(Dashboard);

import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../../store/actions/addBookActions";
class AddBook extends React.Component {
    state = {
        name: "",
        author: "",
        authorEmail: "",
        publication: "",
        error: {},
    };
    static getDrivedStateFromProps(nextProps, prevState) {
        if (
            JSON.stringify(nextProps.bookss.error) !==
            JSON.stringify(prevState.error)
        ) {
            return {
                error: nextProps.bookss.error,
            };
        }
        return null;
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    submitHandler = (event) => {
        event.preventDefault();
        let { name, author, authorEmail, publication } = this.state;
        this.props.add(
            { name, author, authorEmail, publication },
            this.props.history
        );
    };
    render() {
        let { name, author, authorEmail, publication, error } = this.state;
        return (
            <div className="card border-0 shadow">
                <div className="card-header">Add a Book</div>
                <div className="card-body">
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input
                                type="text"
                                className={
                                    error.name
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="name"
                                id="name"
                                placeholder="Enter Book Name"
                                value={name}
                                onChange={this.changeHandler}
                            />
                            {error.name && (
                                <div className="invalid-feedback">
                                    {error.name}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={
                                    error.author
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="author"
                                id="author"
                                placeholder="Enter Author Name"
                                value={author}
                                onChange={this.changeHandler}
                            />
                            {error.author && (
                                <div className="invalid-feedback">
                                    {error.author}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className={
                                    error.authorEmail
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="authorEmail"
                                id="authorEmail"
                                placeholder="Enter Author Email"
                                value={authorEmail}
                                onChange={this.changeHandler}
                            />
                            {error.authorEmail && (
                                <div className="invalid-feedback">
                                    {error.authorEmail}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={
                                    error.publication
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="publication"
                                id="publication"
                                placeholder="Enter Publication Name"
                                value={publication}
                                onChange={this.changeHandler}
                            />
                            {error.publication && (
                                <div className="invalid-feedback">
                                    {error.publication}
                                </div>
                            )}
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Create Book
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookss: state.bookss,
});

export default connect(mapStateToProps, { add })(AddBook);

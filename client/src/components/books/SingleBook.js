import React from "react";
import { Link } from "react-router-dom";

const SingleBook = (book) => {
    return (
        <>
            <th scope="row">{book.row}</th>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.authorEmail}</td>
            <td>{book.publication}</td>
            <td>
                <Link class="btn btn-outline-primary mr-2 " to="/edit-book">
                    Edit
                </Link>
                <Link class="btn btn-danger mr-2 ">Delete</Link>
            </td>
        </>
    );
};

export default SingleBook;

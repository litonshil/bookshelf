import React, { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import BookService from "../../utils/BookService";
import SingleBook from "./SingleBook";
const Books = () => {
    //   const store = useStore();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        BookService.findAll().then((res) => setBooks([...res.data.books]));
    }, [books]);

    return (
        <div>
            <table className="table shadow">
                <thead className="">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Author Email</th>
                        <th>Publications</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, cnt = 0) => (
                        <tr key={book._id}>
                            <SingleBook
                                row={++cnt}
                                name={book.name}
                                author={book.author}
                                authorEmail={book.authorEmail}
                                publication={book.publication}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Books;

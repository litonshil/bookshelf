import React from "react";
import { useSelector } from "react-redux";
const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <table className="table shadow">
        <thead className="">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Author</th>
            <th>Author Email</th>
            <th>Publications</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Books;

import axios from "axios";

const BookService = {
  findAll: async () => {
    return await axios
      .get("/api/books/")
      .then((response) => {
        console.log("FIND ALL", response);
        return response;
      })
      .catch((err) => {
        return false;
      });
  },
};

export default BookService;

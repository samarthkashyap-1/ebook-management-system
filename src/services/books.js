import axios from "axios";
const baseUrl = "http://localhost:3001/books";

const getAllBooks = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const booksToDisplay = (books, filter) => {
  return books.filter((book) => book.name.toLowerCase().includes(filter));
};

export default { getAllBooks, booksToDisplay };

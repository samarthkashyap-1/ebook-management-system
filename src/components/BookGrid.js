import { useEffect, useState } from "react";
import Card from "./Card";
import bookService from "../services/books";
import searchIcon from "../assets/search.svg"

const BookGrid = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    bookService.getAllBooks().then((books) => {
      return setData(books);
    });
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="my-4 flex">
        <label htmlFor="search">
          <img src={searchIcon} alt="Search icon" />
        </label>
        <input
        className="outline-none bg-transparent px-4 ml-6 border-b-2 border-b-white "
          value={filter}
          type="text"
          id="search"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className=" grid grid-cols-1 gap-8 lg:grid-cols-4">
        {bookService.booksToDisplay(data, filter).map((book) => (
          <Card name={book.name} details={book.details} id={book.id} />
        ))}
      </div>
    </>
  );
};

export default BookGrid;

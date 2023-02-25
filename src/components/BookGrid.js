import { useEffect, useState } from "react";
import Card from "./Card";
import bookService from "../services/books";
import searchIcon from "../assets/search.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";



const BookGrid = () => {
    const [parent, enableAnimations] = useAutoAnimate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    bookService.getAllBooks().then((books) => {
      return setData(books);
    });
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const showSearch = (e) => {
    setShow(!show);
    this.focus();
    
  };

  return (
    <>
      <div className="my-4 flex justify-end " ref={parent}>
        {show && (
          <input
            className="outline-none bg-transparent transition ease-in-out duration-500 px-4 border-b-2 border-b-white "
            value={filter}
            type="text"
            id="search"
            onChange={(e) => handleChange(e)}
            autoFocus
          />
        )}
        <img
          onClick={showSearch}
          src={searchIcon}
          alt="Search icon"
          className="border-b-2 border-b-white pb-2"
        />
      </div>
      <div className=" grid grid-cols-1 gap-14 lg:grid-cols-5 h-full">
        {bookService.booksToDisplay(data, filter).map((book) => (
          <Card name={book.name} details={book.details} id={book.id} />
        ))}
      </div>
    </>
  );
};

export default BookGrid;

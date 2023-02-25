import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cover from "../assets/alchemist.jpg";


const Bookpage = () => {
  const {id} = useParams();
  const [bookData, setBookData] = useState({
    id: 0,
    name: "",
    details: "",
    cover: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3001/books/${id}`).then((res) => {
      console.log(res.data);
      setBookData(res.data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-end m-5">
        <Link to={"/"}>
          {/* <button
            type="button
            "
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Close menu</span>

            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}

          <button className="p-4 rounded-full bg-gray-700 hover:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div
        className="m-10 lg:flex lg:flex-row lg:justify-around lg:items-center lg:gap-10"
        id="pdf"
      >
        <img className="lg:w-[25rem]" src={cover} alt="" />
        <div className="flex flex-col gap-10 py-1 m-8 w-3/2">
          <p className=" text-3xl font-bold text-white">{bookData.name}</p>
          <p className="text-white break-words">{bookData.details}</p>
          <div className="flex justify-center">
            {/* create a download button with animation in tailwindcss */}
            <button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bookpage;

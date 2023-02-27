import { Link } from "react-router-dom";
import library from "../assets/library.png"
import Navbar from "../components/Navbar";

const Landing = () => {
    return (
        <div className="m-auto">
            <Navbar />
            <div className="px-4 flex flex-col gap-6">
                <div className="py-8 ">
                    <h2 className="text-4xl font-bold">Welcome to Ebook Management System.</h2>
                    <p className="mt-6 text-xl font-semibold">We have created this project to provide the student with all the resources so that they can easily gather resources to study.</p>
                </div>
                <div className="">
                    <img src={library} alt="" className="w-full " />
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
            <button className="px-6 py-4 bg-blue-400 m-auto w-1/2 text-xl font-bold rounded">
                <Link to={"/books"} >Enter</Link>
            </button>
            </div>
        </div>
    )
}

export default Landing;
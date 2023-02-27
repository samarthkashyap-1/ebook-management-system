import { Link } from "react-router-dom";
import library from "../assets/library.png"
import Navbar from "../components/Navbar";
import github from "../assets/github.svg"

const Landing = () => {
    return (
        <div className="m-auto h-full">
            <Navbar />
            <div className="px-4 flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:px-8 lg:mt-14 lg:mx-auto lg:gap-16 lg:h-1/2">
                <div className="py-8 ">
                    <h2 className="text-4xl font-bold">Welcome to Ebook Management System.</h2>
                    <p className="mt-6 text-xl font-semibold ">We have created this project to provide the student with all the resources so that they can easily gather resources to study.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius rerum, itaque, assumenda provident corrupti iste maiores eos necessitatibus suscipit enim consectetur cum dolore inventore quia perferendis. Veniam, iusto! Laudantium.</p>
                    <a href="https://github.com/utkarsh1311/ebook-management-system" target="_blank" rel="noreferrer" className="flex items-center mt-6 text-xl font-semibold">

                        <img src={github} alt="" title="Checkout project on GitHUb" className="lg:w-10 lg:h-10 w-6 h-6" />
                    </a>
                </div>
                <div className="flex items-center">
                    <img src={library} alt="" className="w-full drop-shadow-xl" />
                </div>
            </div>
            <div className="flex justify-center items-center my-8 lg:mt-32 pb-12">
                <a href="#" class="w-1/2 group inline-flex items-center rounded bg-blue-400 px-6 py-4 lg:w-fit font-semibold text-white transition hover:bg-slate-700">
                    <Link to="/books">Go to books</Link>
                    <svg class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path class="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                        <path class="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Landing;
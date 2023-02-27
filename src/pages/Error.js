import error from '../assets/error.gif';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='px-4 w-screen h-full flex flex-col justify-center items-center gap-6'>
            <img src={error} alt="error page" className='w-full lg:w-1/2'/>
            <a href="#" class="w-fit group inline-flex items-center rounded bg-blue-400 px-6 py-4 lg:w-fit font-semibold text-white transition hover:bg-slate-700">
                    <Link to="/">Go to Home</Link>
                    <svg class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path class="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                        <path class="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                </a>
        </div>
    )

}

export default Error;
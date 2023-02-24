import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 text-white">
      <ul className="flex items-center justify-end gap-4">
        <li className="mr-auto">
          <Link to={"/"}>
            <h2 className="text-xl font-bold">Ebook</h2>
          </Link>
        </li>
        <li>
          {/* <a href="www.google.com" className="text-lg font-semibold ">Home</a> */}
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          {/* <a href="www.goole.com" className="text-lg font-semibold ">About</a> */}
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;

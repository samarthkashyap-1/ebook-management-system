// import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Bookpage from "./components/Bookpage";
import About from "./pages/About";

function App() {
  return (
    <div
      className="bg-gray-900 h-full text-white lg:p-14"
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<Bookpage />} />
      </Routes>
    </div>
  );
}

export default App;

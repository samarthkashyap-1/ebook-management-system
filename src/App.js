// import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Bookpage from "./components/Bookpage";
import About from "./pages/About";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Landing from "./pages/Landing";
import Error from "./pages/Error";

function App() {
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div
      className="bg-gray-900 h-screen overflow-auto scrollbar-hide text-white lg:px-14 "
      ref={parent}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/books"
          element={
            <>
              <Navbar />
              <Main />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<Bookpage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

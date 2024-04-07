import React from "react";
// import AOS from "aos";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";

// import "./App.css";
// import "aos/dist/aos.css";

const App = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1500 });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<p className="text-red-500">Page not found</p>}
        />
      </Route>
    </Routes>
  );
};

export default App;
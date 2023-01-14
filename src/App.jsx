import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Blogs from "./pages/Blogs/Blogs";
import Store from "./pages/Store/store";
import Calculator from "./pages/Tools/Tools";
import Landing from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/store" element={<Store />} />
      <Route path="/tools" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;

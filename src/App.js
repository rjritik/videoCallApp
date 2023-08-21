import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Room from "./Room";
import About from "./About";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/room/:id" element={<Room />}></Route>
      </Routes>
    </>
  );
}

export default App;

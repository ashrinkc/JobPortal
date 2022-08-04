import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Page/Jobs/Jobs";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;

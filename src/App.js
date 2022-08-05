import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Page/Jobs/Jobs";
import Contact from "./Page/Contact/Contact";
import Blog from "./Page/Blogs/Blog";
import AboutUs from "./Page/AboutUs/AboutUs";
import Recruitment from "./Page/Recruitment/Recruitment";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/recruitment" element={<Recruitment />}></Route>
      </Routes>
    </div>
  );
}

export default App;

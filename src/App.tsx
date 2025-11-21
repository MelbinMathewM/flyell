import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Explore from "./pages/Explore";
import BackToTopButton from "./components/Back-To-Top";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations/explore" element={<Explore />} />
      </Routes>

      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;

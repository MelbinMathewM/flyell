import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* Always visible */}
      <Navbar />

      {/* Page content changes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>

      {/* Always visible */}
      <Footer />
    </>
  );
}

export default App;

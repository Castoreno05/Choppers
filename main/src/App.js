import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Barbers from "./components/Pages/Barbers";
import Contact from "./components/Pages/Contact";
import Gallery from "./components/Pages/Gallery";
import Products from "./components/Pages/Products";
import Appointments from "./components/Pages/Appointments";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

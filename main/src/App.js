import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Barbers from "./Pages/Barbers";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Products from "./Pages/Products";
import Appointments from "./Pages/Appointments";
import Footer from "./Components/Footer";

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

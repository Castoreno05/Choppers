import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

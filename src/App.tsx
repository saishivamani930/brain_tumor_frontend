// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Developer from "./pages/Developer";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Uploader from "./components/Uploader";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/upload" element={<Uploader />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

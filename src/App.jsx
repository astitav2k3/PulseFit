import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import { createContext } from "react";

// create global context
export const GlobalContext = createContext();

export default function App() {
  // your single Google Maps link here 👇
  const mapLink =
 "https://maps.google.com/?q=Nexus+Elante+Mall";

  return (
    <GlobalContext.Provider value={{ mapLink }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

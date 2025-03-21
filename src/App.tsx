import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Ui/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Ui/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#121b25] overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Layout/Footer";
import ContactUs from "./pages/home/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#121b25] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

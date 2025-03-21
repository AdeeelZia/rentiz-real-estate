import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#121b25] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

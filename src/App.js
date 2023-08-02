import Banner from "./body components/banner/Banner";
import "./App.css";
import Navbar from "./body components/navbar/Navbar";
import MainPage from "./body components/mainpage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";
import Faqpage from "./pages/Faqpage";
import Fotter from "./body components/fotter/Fotter";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/frequently-question" element={<Faqpage />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

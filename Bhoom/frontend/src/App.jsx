import "./App.css";
import Header from "./components/layout/Header/Header";
import {Footer} from "./components/layout/Footer/Footer";
import { Home } from "./components/layout/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/logout" element={<Logout />} />
          (<Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />)
          <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

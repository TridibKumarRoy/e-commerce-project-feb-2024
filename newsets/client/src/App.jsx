import "./App.css";
import Header from "./components/layouts/Header/Header";
// import {Footer} from "./components/layout/Footer/Footer";
// import { Home } from "./components/layout/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
         
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
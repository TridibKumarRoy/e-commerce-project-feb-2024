import "./App.css";
import { Header } from "./components/layouts/Header/Header";
import { Footer } from "./components/layouts/Footer/Footer";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from './components/layouts/Error404/Error404';
import  LoginSignUp  from './components/User/LoginSignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="*" element={<Error404 />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
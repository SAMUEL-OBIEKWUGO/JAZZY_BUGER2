import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Layout/NavBar";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import { useState } from "react";
import Footer from "./Layout/Footer";
import Error from "./pages/Error";

function App() {
  const [cartItem, setCartItem] = useState([1])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={
            <>
              <Navbar cartItem ={cartItem} />
              <Footer />
            </>
          }>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<CheckOut />}></Route>
            </Route>
          </Route>
          <Route path="/SignUp" element={<SignIn />}/>
          <Route path="/SignIn" element={<SignUp />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

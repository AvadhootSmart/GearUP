import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  ProductPage,
  LoginPage,
  RegisterPage,
  CategoryPage,
  CartPage,
  FailedPage,
  SuccessPage,
} from "./pages";
import { Navbar, Footer } from "./components";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
// import SuccessPage from "./pages/SuccessPage";
// import FailedPage from "./pages/FailedPage";

export default function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/paymentSuccess" element={<SuccessPage />} />
          <Route path="/paymentFailed" element={<FailedPage />} />
          <Route path="/Cart" element={user ? <CartPage /> : <Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const AuthRoutes = () => (
  <>
    <Route path="/Login" element={<LoginPage />} />
    <Route path="/Register" element={<RegisterPage />} />
  </>
);

/*
  Implement the toast feature using the react toast library, also carry forward the functionality from the hero cards to the featured card to be added to the cart

  as the navbar isnt sticky or fixed, either make it sticky and implement the toast

  also using the toast use it for the authentication system too, for signalling
  if logged in succesfully or not

  

*/

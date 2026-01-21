import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import SearchResult from "./pages/SearchResults";
import { Routes, Route } from "react-router-dom";
import OfferDetails from "./pages/OfferDetails";
import Messages from "./pages/Messages";
import OfferPutting from "./pages/OfferPutting";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import SellerPannel from "./pages/SellerPannel";
import React from "react";
import UserContext from "./context/UserContext";
import { useState } from "react";
import { useTokenRefresher } from "./tokenRefreshing.jsx";
import ScrollToTop from "./functions/ScrollToTop.jsx";
import ProtectedRoutes from "./protectedRoutes.jsx";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [user,setUser] = useState({});
  const [token,setToken] = useState("");

  useTokenRefresher(token, setToken);

  return (
    <>
    <ToastContainer />
    <ScrollToTop />
    <UserContext.Provider value={{
      user:user, 
      setUser:setUser, 
      token:token,
      setToken:setToken
    }}>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dealers" element={<div>Dla dealerów page</div>} />
      <Route path="/help" element={<div>Pomoc page</div>} />
      <Route path="/searchResult" element={<SearchResult />} />
      <Route path="/offerDetails/:id" element={<OfferDetails />} />
      <Route path="/messages" element={<ProtectedRoutes><Messages /></ProtectedRoutes>} />
      <Route path="/offerPutting" element={<ProtectedRoutes><OfferPutting /></ProtectedRoutes>} />
      <Route path="/login" element={<Login />} />
      <Route path="/favourites" element={<ProtectedRoutes><Favourites /></ProtectedRoutes>} />
      <Route path="/sellerPanel" element={<ProtectedRoutes><SellerPannel /></ProtectedRoutes>} />
    </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;



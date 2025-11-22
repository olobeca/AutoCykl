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
function App() {
  const [user,setUser] = useState({});

  return (
    <>
    <UserContext.Provider value={{
      user:user, 
      setUser:setUser, 
    }}>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dealers" element={<div>Dla dealerów page</div>} />
      <Route path="/help" element={<div>Pomoc page</div>} />
      <Route path="/searchResult" element={<SearchResult />} />
      <Route path="/offerDetails" element={<OfferDetails />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/offerPutting" element={<OfferPutting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/sellerPanel" element={<SellerPannel />} />
    </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;



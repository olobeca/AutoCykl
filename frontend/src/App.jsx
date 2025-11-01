import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import SearchResult from "./pages/SearchResults";
import { Routes, Route } from "react-router-dom";
import OfferDetails from "./pages/OfferDetails";
import Messages from "./pages/Messages";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dealers" element={<div>Dla dealerów page</div>} />
      <Route path="/help" element={<div>Pomoc page</div>} />
      <Route path="/searchResult" element={<SearchResult />} />
      <Route path="/offerDetails" element={<OfferDetails />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
    </>
  );
}

export default App;



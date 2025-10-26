import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dealers" element={<div>Dla dealerów page</div>} />
      <Route path="/help" element={<div>Pomoc page</div>} />
    </Routes>
    </>
  );
}

export default App;



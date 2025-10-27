import "../App.css";
import Header from "../components/Header.jsx";
import InputFrame from "../components/InputFrame.jsx";
import FeaturedOffers from "../components/FeaturedOffers.jsx";

function WelcomePage() {
  return (
    <div className='bg-white'>
      <Header />
      <InputFrame />
      <FeaturedOffers /> 
      
    </div>
  );
}

export default WelcomePage;



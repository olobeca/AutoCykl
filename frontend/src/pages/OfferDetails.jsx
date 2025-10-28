import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import OfferDetailsCard from "../components/OfferDetailsCard.jsx";

function OfferDetails() {
  return (
    <div className='bg-white'>
      <Header />
      <OfferDetailsCard />
      <Footer />
    </div>
  )
}

export default OfferDetails;

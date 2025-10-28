import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import OfferDetailsCard from "../components/OfferDetailsCard.jsx";

function OfferDetails() {
  return (
    <div className='bg-white'>
      <Header />
      <OfferDetailsCard props={{title:'BMW Seria 5 520d xDrive M Sport', isFeatured: true, isAccidentFree: true}} />
      <Footer />
    </div>
  )
}

export default OfferDetails;

import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SearchResultCard from "../components/SearchResultCard.jsx";

function SearchResult() {
  return (
    <div className='bg-white'>
      <Header />
      <SearchResultCard />
      <Footer />
    </div>
  );
}

export default SearchResult;








import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SearchResultCard from "../components/SearchResultCard.jsx";
import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  console.log("Search parameters:", paramsObject);
  return (
    <div className='bg-white'>
      <Header />
      <SearchResultCard />
      <Footer />
    </div>
  )
}

export default SearchResult;








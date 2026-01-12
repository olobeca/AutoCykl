import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SearchResultCard from "../components/SearchResultCard.jsx";
import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  console.log("Search parameters:", paramsObject);

  try {
    fetch(`http://localhost:5001/offers/getOffersByParams?${new URLSearchParams(paramsObject).toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched offers by parameters:", data);
      });
  } catch (error) {
    console.error("Error fetching offers by parameters:", error);
  }
  return (
    <div className='bg-white'>
      <Header />
      <SearchResultCard />
      <Footer />
    </div>
  )
}

export default SearchResult;








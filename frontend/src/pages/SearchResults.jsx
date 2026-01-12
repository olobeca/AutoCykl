import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SearchResultCard from "../components/SearchResultCard.jsx";
import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  console.log("Search parameters:", paramsObject);

  const mapped = {
    brand: paramsObject.brand,
    model: paramsObject.model,
    // dopasuj do backendu — tutaj wysyłam minPrice/maxPrice
    minPrice: paramsObject.priceFrom,
    maxPrice: paramsObject.priceTo,
    year: paramsObject.yearFrom,
    fuelType: paramsObject.fuelType,
    location: paramsObject.location,
    mileageTo: paramsObject.mileageTo,
  };

  const qs = new URLSearchParams(
    Object.entries(mapped).filter(([, v]) => v !== undefined && v !== "")
  ).toString();

  try {
    fetch(`http://localhost:5001/offers/getOffersByParams?${qs}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
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








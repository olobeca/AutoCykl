import "../App.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SearchResultCard from "../components/SearchResultCard.jsx";
import { data, useSearchParams } from "react-router-dom";
import { use, useState } from "react";
import { useEffect } from "react";

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  console.log("Search parameters:", paramsObject);

  const [newFilters, setNewFilters] = useState({})



  useEffect(() => {
    console.log("Current filters state", newFilters);
    // if there are filters, call backend endpoint to fetch filtered offers
    if (newFilters && Object.keys(newFilters).length > 0) {
      try {
        fetch(`${process.env.REACT_APP_API_URL}/offers/getOffersByFilters`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(newFilters),
        })
          .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
          })
          .then((data) => {
            console.log("Fetched offers by filters:", data);
          })
          .catch((err) => console.error("Error fetching offers by filters:", err));
      } catch (error) {
        console.error("Error while fetching offers by filters:", error);
      }
    }
  }, [newFilters]);
  
  
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
    fetch(`${process.env.REACT_APP_API_URL}/offers/getOffersByParams?${qs}`, {
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
      <SearchResultCard props={{setNewFilters,data}} />
      <Footer />
    </div>
  )
}

export default SearchResult;








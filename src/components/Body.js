import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer.js";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // Conditional Rendering
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(search)
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

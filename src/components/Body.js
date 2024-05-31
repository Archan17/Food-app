import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState(resObjList);
  const [search, setSearch] = useState("");
  //
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };
  //
  const handleFilter = () => {
    const fileterdList = listofRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(fileterdList);
  };

  const filteredRestaurant = listofRestaurant.filter((res) => 
    res.info.name.toLowerCase().includes(search.toLowerCase())
  );
  //
  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search Food 😋.."
          className="search-bar"
          value={search}
          onChange={handlesearch}
        ></input>
        <button className="btn-filter" onClick={handleFilter}>
          Top Rated⭐️
        </button>
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

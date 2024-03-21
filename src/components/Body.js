import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState(resObjList);
  const [search, setSearch] = useState("");
  //
  const handlesearch = (event) => {
    setSearch(event.target.value);
  };

  //
  const filteredRestaurant = listofRestaurant.filter((res) =>
    res.info.name.toLowerCase().includes(search.toLowerCase())
  );

  //
  const resetRestaurantList = () => {
    setListOfRestaurant(resObjList);
  };

  //
  const handleFilter = () => {
    const fileterdList = listofRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(fileterdList);
  };
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
        <button className="btn-reset" onClick={resetRestaurantList}>
          Reset
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

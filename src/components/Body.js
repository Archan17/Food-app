import RestaurantCard from "./RestaurantCard";
import { resObjList } from "../utils/mockData";
// import { useEffect, useState } from "react";
//Body Component

const Body = () => {
  // const [filteredRestaurantList, setFilteredRestaurant] = useState([]);
  // function onsubmit() {
  //   const filteredRestaurants = resObjList.filter(
  //     (res) => res.info.avgRating > 4
  //   );
  //   setFilteredRestaurant(filteredRestaurants);
  // }
  // useEffect(() => {
  //   onsubmit();
  // }, []);

  return (
    <div className="body">
      <div className="filter">
        <button className="btn-filter" onClick={onsubmit}>
          Filter 👀
        </button>
      </div>
      <div className="res-container">
        {resObjList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

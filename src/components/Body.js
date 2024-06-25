import RestaurantCard from "./RestaurantCard";
import Shimmer from "../utils/Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurantData from "../utils/useRestaurantData.js";

const Body = () => {
  const { listofRestaurant, filteredRestaurant, search, setSearch } =
    useRestaurantData();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1 className="offline-status">Please Check your internet</h1>;

  // Conditional Rendering
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black m-1 p-2 rounded-lg"
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
            className="px-4 py-2 bg-blue-300 m-4 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="custom-link"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

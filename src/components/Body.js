import RestaurantCard from "./RestaurantCard";

//Body Component
export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;

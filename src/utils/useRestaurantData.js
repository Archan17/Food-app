import { useState, useEffect } from "react";
import { DATA_API_URL } from "./constants";

const useRestaurantData = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(DATA_API_URL);
    const json = await data.json();
    // console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListofRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  }

  useEffect(() => {
    const filtered = listofRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  }, [search, listofRestaurant]);

  return {
    listofRestaurant,
    filteredRestaurant,
    search,
    setSearch,
  };
};

export default useRestaurantData;

import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "../utils/Shimmer.js";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants.js";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchmenu();
  }, []);

  const fetchmenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setresInfo(json);
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(resInfo);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.card.card.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "../utils/Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (!resInfo) {
    return <Shimmer />;
  }
  //   console.log(data);

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(
  //   resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  // console.log(resInfo);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold my-5 text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={{ ...category?.card?.card, index }}
          showItems={showIndex === index}
          setShowIndex={(index) => setShowIndex(index)}
          currentIndex={showIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

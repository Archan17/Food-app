import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines } = resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div
      data-testid="resCard"
      className="p-4 m-4 w-[250px] cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="cuis">{cuisines ? cuisines.join(", ") : cuisines}</h4>
        <h4>{avgRating} ⭐️ </h4>
        <h4 color="red">{deliveryTime} Minutes Away</h4>
      </div>
    </div>
  );
};

// export const withPromoted = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
//           Promoted
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines } = resData.info;

  return (
    <div
      data-testid="resCard"
      className="res-container res-card res-card:hover"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="rescard-info">
        <h3>{name}</h3>
        <h4 className="cuis">{cuisines ? cuisines.join(", ") : cuisines}</h4>
        <h4>{avgRating} stars </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

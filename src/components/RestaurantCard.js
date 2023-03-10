import { Link } from "react-router-dom";
import { IMG_CONFIG_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  id,
}) => {
  // const { cloudinaryImageId, name, cuisines, avgRating } = restutent;
  return (
    <Link to={`restuarant/${id}`}>
      <div className="resutent-card">
        <img src={`${IMG_CONFIG_URL}${cloudinaryImageId}`} alt={name} />
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <div className="rating">
          <h2>{avgRating} ⭐</h2>
        </div>
      </div>
    </Link>
  );
};
export default RestaurantCard;

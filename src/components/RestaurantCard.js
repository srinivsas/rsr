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
      <div className="w-64 h-72 p-5 border-2 m-4 transition relative hover:shadow flex-wrap">
        <img
          className="w-full h-2/4"
          src={`${IMG_CONFIG_URL}${cloudinaryImageId}`}
          alt={name}
        />
        <h1>{name}</h1>
        <h3 className="flex flex-wrap w-auto">{cuisines.join(",")}</h3>
        <div className="rating">
          <h2 className="w-16 h-auto bg-[#db7c38] absolute ml-3 mt-4 mb-3 px-1 py-1 left-1 bottom-2 font-normal">
            {avgRating} ⭐
          </h2>
        </div>
      </div>
    </Link>
  );
};
export default RestaurantCard;

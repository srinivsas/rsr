import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Simmerskeleton from "./Skeleton";
import { searchRestaurant } from "../utils/helper";
import useIsOnline from "../utils/useIsOnLine";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurents] = useState([]);
  const [filtredRestaurants, setFltredRestaurents] = useState([]);

  useEffect(() => {
    getRestuarants();
  }, []);
  const getRestuarants = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4939468&lng=78.4062623&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurents(json.data?.cards[2]?.data.data.cards);
    setFltredRestaurents(json.data?.cards[2]?.data.data.cards);
  };
  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h1>🔴 Please check your the internet connection!!!</h1>;
  }
  return (
    <>
      <div className="max-w-lg items-center justify-center justify-items-center m-auto mt-3 flex">
        <input
          type="text"
          className="h-9 px-2 py-4 text-base w-full max-w-lg font-medium rounded-md	border-1 border-black outline outline-2  outline-offset-2 "
          placeholder="search Resturant"
          value={searchInput}
          onChange={e => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="h-10 px-6  rounded-xl rounded-tl-none rounded-bl-none -ml-20 bg-black text-white justify-center hover:bg-gray-500"
          onClick={() => {
            const data = searchRestaurant(searchInput, allRestaurants);
            setFltredRestaurents(data);
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-wrap my-8 items-center justify-items-center content-center ">
        {allRestaurants.length === 0
          ? Array(10)
              .fill("")
              .map((e, i) => (
                <div key={i}>
                  <Simmerskeleton />
                </div>
              ))
          : filtredRestaurants?.map(restutent => {
              // return <ResturentCard restutent ={restutent.data} key={restutent.data.uuid} />;
              return (
                <RestaurantCard {...restutent.data} key={restutent.data.uuid} />
              );
            })}
      </div>
    </>
  );
};
export default Body;

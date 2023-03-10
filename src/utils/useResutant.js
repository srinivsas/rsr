import React, { useState, useEffect } from "react";
import { RES_DETAIL_URL } from "../constants";

const useResutant = id => {
  const [resturent, setResturent] = useState(null);
  console.log(resturent);

  useEffect(() => {
    resturentDetailsView();
  }, []);
  async function resturentDetailsView() {
    const data = await fetch(`${RES_DETAIL_URL}${id}`);
    const json = await data?.json();
    setResturent(json.data?.cards[0]?.card?.card?.info);
  }

  return resturent;
};

export default useResutant;

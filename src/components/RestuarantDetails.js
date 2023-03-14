import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { IMG_CONFIG_URL } from "../constants";
import useResutant from "../utils/useResutant";

const RestuarantDetails = () => {
  const { id } = useParams();
  const resturent = useResutant(id);

  return (
    <div>
      {!resturent ? (
        <div className="w-64 h-72 p-5 border-2 m-4 transition relative hover:shadow flex-wrap">
          <Skeleton />
        </div>
      ) : (
        <div className="w-64 h-72 p-5 border-2 m-4 transition relative hover:shadow flex-wrap">
          <img
            src={`${IMG_CONFIG_URL}${resturent.cloudinaryImageId}`}
            alt={resturent.name}
          />
          <h1>{resturent.name}</h1>
          <h1>{resturent?.cuisines?.join(",")}</h1>
          <h3>{resturent.costForTwoMessage}</h3>
        </div>
      )}
    </div>
  );
};

export default RestuarantDetails;

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
        <div className="resutent-card">
          <Skeleton />
        </div>
      ) : (
        <div className="resutent-card">
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

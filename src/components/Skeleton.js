import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Simmerskeleton = () => {
  return (
    <div className="resutent-card">
      <h1>
        <Skeleton width={200} height={100} style={{ marginBottom: "10px" }} />
      </h1>
      <h1>
        <Skeleton width={200} />
      </h1>
      <h3></h3>
      <h2>
        <Skeleton width={200} />
      </h2>
      <div className="rating" style={{ background: "none" }}>
        <h2>
          <Skeleton width={70} height={40} />
        </h2>
      </div>
    </div>
  );
};

export default Simmerskeleton;

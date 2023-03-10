import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>Opps!!</h1>
      <h2>Some thing went wrong!! </h2>
      <h2>
        {status}:{statusText}
      </h2>
    </div>
  );
};
export default ErrorPage;

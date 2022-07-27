import React from "react";
import { Navigate } from "react-router-dom";

const Navigat = () => {
  return (
    <div>
      NavigateP
      <div>
        <Navigate to={"/signin"} />
      </div>
    </div>
  );
};

export default Navigat;

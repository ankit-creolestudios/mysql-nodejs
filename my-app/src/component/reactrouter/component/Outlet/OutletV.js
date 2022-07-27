import React from "react";
import { useNavigate } from "react-router-dom";

const OutletV = () => {
  const navigate = useNavigate();
  return (
    <div>
      OutletV
      <div>
        {" "}
        <button onClick={() => navigate(-2)}>2 page back </button>
      </div>
    </div>
  );
};

export default OutletV;

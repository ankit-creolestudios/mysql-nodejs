import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UseNavigate = () => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div>
      UseNavigate
      <div
        onClick={() =>
          navigate("/about", {
            state: { message: "set", previousPage: location.pathname },
          })
        }
      >
        use navigate
      </div>
    </div>
  );
};

export default UseNavigate;

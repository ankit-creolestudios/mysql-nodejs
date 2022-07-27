// useLoacation hook return current location object
/*
{
    hash
    key
    pathname

    search
    state
}

*/
import React from "react";
import { useLocation } from "react-router-dom";

const UseLocation = () => {
  const location = useLocation();
  console.log(location);
  return <div>UseLocation</div>;
};

export default UseLocation;

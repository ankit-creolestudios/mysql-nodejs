// outlet component is use in parent route element to render their child route element
import React from "react";
import { NavLink, Outlet, useLocation, useHistory } from "react-router-dom";
const OutletAbout = () => {
  const locationv = useLocation();
  console.log(locationv);

  return (
    <div>
      Outlet
      <div>
        <NavLink to={"a"}>About a</NavLink>
        <NavLink to={"b"}>About b</NavLink>
        <br />
        <Outlet />
      </div>
    </div>
  );
};

export default OutletAbout;

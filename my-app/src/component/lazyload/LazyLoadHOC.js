import React from "react";
import LazyLoader from "./lazyLoader";
const Admin = LazyLoader(() => import("./Admin"));
const Customer = LazyLoader(() => import("./Customer"));
const LazyLoadHOC = (props) => {
  if (props.user === "admin") {
    return (
      <div>
        LazyLoadHOC
        <div></div>
        <Admin />
      </div>
    );
  } else if (props.user === "user") {
    return <Customer />;
  } else {
    return <div>user not valid</div>;
  }
};

export default LazyLoadHOC;

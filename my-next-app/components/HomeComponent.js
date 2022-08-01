import React, { useEffect } from "react";

const HomeComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const home = localStorage.getItem("user");
      console.log(home);
    }
  }, []);
  return <div>Home</div>;
};

export default HomeComponent;

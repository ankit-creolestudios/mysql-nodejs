import React from "react";
import { useParams } from "react-router-dom";

const UseParamV = () => {
  const param = useParams();
  console.log(param);
  return <div>UseParamV</div>;
};

export default UseParamV;

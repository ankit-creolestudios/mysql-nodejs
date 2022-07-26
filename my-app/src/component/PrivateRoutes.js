import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const navigation = useNavigate();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const ptoken = localStorage.getItem("token");
    setToken(ptoken);
    console.log(ptoken);
  }, []);
  console.log(token);
  if (token === null) {
    navigation("/login");
  }
  if (token !== null) {
    navigation("/");
  }
  return <div>{children}</div>;
};

export default PrivateRoutes;

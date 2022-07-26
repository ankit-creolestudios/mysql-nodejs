import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import PrivateRoutes from "./component/PrivateRoutes";
import Register from "./component/Register";
function App() {
  // React.useEffect(() => {
  //   axios.get("http://localhost:5000/order/").then((res) => console.log(res));
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PrivateRoutes>
              <Login />
            </PrivateRoutes>
          }
        />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

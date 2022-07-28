import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import LazyLoadHOC from "./component/lazyload/LazyLoadHOC";
import SuspenseLazyLoad from "./component/lazyload/SuspenseLazyLoad";
import Login from "./component/Login";
import PrivateRoutes from "./component/PrivateRoutes";
import Navigat from "./component/reactrouter/component/Navigate/Navigat";
import OutletAbout from "./component/reactrouter/component/Outlet/Outlet";
import OutletP from "./component/reactrouter/component/Outlet/OutletP";
import OutletV from "./component/reactrouter/component/Outlet/OutletV";
import UseLocation from "./component/reactrouter/hooks/UseLocation";
import UseParam from "./component/reactrouter/hooks/useParams/UseParam";
import UseParamV from "./component/reactrouter/hooks/useParams/UseParamV";
import Register from "./component/Register";
import MyForm from "./component/sagaComponent/MyForm";
function App() {
  // React.useEffect(() => {
  //   axios.get("http://localhost:5000/order/").then((res) => console.log(res));
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/about" element={<UseLocation />} /> */}
        <Route path="/about" element={<OutletAbout />}>
          <Route path="a" element={<OutletP />} />
          <Route path="b" element={<OutletV />} />
        </Route>
        <Route path="/" element={<Home />} />

        <Route path="/useparam" element={<UseParam />} />
        <Route path="/useparam/:id" element={<UseParamV />} />
        <Route
          path="/signin"
          element={
            <PrivateRoutes>
              <Login />
            </PrivateRoutes>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route
          path="/suspense"
          element={<SuspenseLazyLoad user="customer" />}
        />
        <Route path="/vhoclazy" element={<LazyLoadHOC user="admin" />} />
        <Route path="/crud" element={<MyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

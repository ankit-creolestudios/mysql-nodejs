import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HigherOrder from "./components/HigherOrderComponent";
import Internationalization from "./components/Internationalization";
import Home from "./components/Home/Home";
import AntdSite from "./components/antd-site";
import Hook from "./components/hooks";
import Uncontrolled from "./components/ControlledVsUncontrolled";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoc" element={<HigherOrder />} />
          <Route path="/i18n" element={<Internationalization />} />
          <Route path="/antd" element={<AntdSite />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/controlanduncontrol" element={<Uncontrolled />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

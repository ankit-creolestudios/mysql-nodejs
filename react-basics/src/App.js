import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HigherOrder from "./components/HigherOrderComponent";
import Internationalization from "./components/Internationalization";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoc" element={<HigherOrder />} />
          <Route path="/i18n" element={<Internationalization />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

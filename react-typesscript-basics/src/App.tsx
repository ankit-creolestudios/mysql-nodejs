import React from "react";
import CustomHookStorage from "./components/hooks/CustomHookStorage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CustomHookStorage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

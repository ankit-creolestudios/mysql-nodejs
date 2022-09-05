import React, { useEffect, useState } from "react";

const Debounc = () => {
  const [name, setName] = useState("");
  const onChange = async (e) => {
    const res = await fetch(
      `https://swapi.dev/api/people/?search=${e.target.value}`
    );

    const result = await res.json();
    console.log(result);
  };
  const debounceSearch = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  return (
    <div>
      Debounc
      <div>
        <div>
          <label>Name:</label>
          <input type={"text"} onChange={debounceSearch(onChange, 500)} />
        </div>
      </div>
    </div>
  );
};

export default Debounc;

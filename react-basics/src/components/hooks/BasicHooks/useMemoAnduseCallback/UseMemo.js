import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const updateSquare = useMemo(() => {
    return squareNumber(count);
  });
  const update = useCallback(() => setCount(count + 1), [count]);
  console.log("parent render");
  return (
    <div>
      UseMemo
      <div>
        <div>
          Parent count {count}
          <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
          <br />
          <div>
            Parent :
            <input
              type={"text"}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </div>
        </div>
        <br />
        <Child count={count} update={update} updateSquare={updateSquare} />
      </div>
    </div>
  );
};

export default UseMemo;
function squareNumber(n) {
  return Math.pow(n, 2);
}

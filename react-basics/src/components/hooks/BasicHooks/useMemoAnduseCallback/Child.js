import React, { memo } from "react";

const Child = (props) => {
  const { count, update, updateSquare } = props;
  console.log("child render");
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid",
        margin: "auto",
      }}
    >
      Child {count}
      <div>
        <button onClick={update}>Increment</button>
      </div>
      <div>square: {updateSquare}</div>
    </div>
  );
};

export default memo(Child);
//memoization is a speed optimization technique in programing, where given a function, we return a cached version of the output if the same inputes are used
//A memoized function remembers the results of output for a given set of input
//react we can memoize component,functions or just a regular computed value, where component have inputs are props
//when memoizing component,it does a shallow comparision of the props and if it sees that it has changed, then it will re-render

//memoization is not free,we are trading space for tim

/*useRef
  return a mutable ref object
  holding value in the current property and persist for the full lifetim of the component
  it helps to access the dom node by ref
  if you would like to persist value and not re render on value change then use useRef otherwise useState
*/

import React, { useEffect, useRef, useState } from "react";
import { usePrevious } from "../customhook/usePrevious";
const UseRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  // const previousCount = useRef(0);
  // useEffect(() => {
  //   previousCount.current = count;
  // }, [count]);
  const onSubmit = () => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  };
  const previousCount = usePrevious(count);
  return (
    <div>
      UseRef
      <div>
        <input ref={nameRef} type="text" />
        <button onClick={onSubmit}>submit</button>
      </div>
      <div>
        <h3>Useref persists</h3>
        <div>count {count}</div>
        {/* <div>priviouscount {previousCount.current}</div> */}
        <div>previouscount {previousCount}</div>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
                                                                                                                                                                                                                                                                                                                                       
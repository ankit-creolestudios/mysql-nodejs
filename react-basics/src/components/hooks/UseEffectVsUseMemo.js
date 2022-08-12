import React, { useEffect, useMemo, useState } from "react";

const UseEffectVsUseMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  const [name, setName] = useState("ankit");
  /* useEffect(() => {
     console.log(Math.random());
  }, []);
   empty array dependency stops rerendering component it renders component load tim*/
  useEffect(() => {
    console.log(Math.random());
  }, [data]);
  const memo = useMemo(() => {
    return (
      <div>
        <div>
          render dependent {count} {name}
        </div>
      </div>
    );
  }, [name]);
  return (
    <div>
      <div> UseEffectVsUseMemo</div>
      <div>{count}</div>
      <div>{data}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Update</button>
        <button onClick={() => setData(data + 1)}>Update Other</button>
      </div>
      <div>UseMemo</div>
      {memo}
      <div>render everytim {count}</div>
      <button onClick={() => setCount(count + 1)}>Upadte</button>
      <button onClick={() => setName("ankit kumar")}>Upadte</button>
    </div>
  );
};

export default UseEffectVsUseMemo;
// useMemo stops a specific part of component rerendering
// useEffect stops whole component rerendering

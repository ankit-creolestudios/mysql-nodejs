import React from "react";
import UseRef from "./useRef/UseRef";
import { useDocumentTitle } from "./customhook/useDocumentTitle";
import { useToggle } from "./customhook/useToggle";
import { useLocalStorage } from "./customhook/useLocalstorage";
  
const CustomHookStorage = () => {
  const [state, setState, remove] = useLocalStorage("name", "ankit");
  const [isToggle, setIsToggle] = useToggle(false);
  useDocumentTitle("Reactjs");
  return (
    <div style={{ textAlign: "center", margin: "40px 0" }}>
      CustomHookStorage
      <div>{state}</div>
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setState("ankit kumar")}>Update storage</button>
      </div>
      <div>
        <button onClick={remove}>Remove storage</button>
      </div>
      <hr />
      <div>
        <div>
          Toggle is{" "}
          {isToggle ? (
            <div style={{ color: "red" }}> yes</div>
          ) : (
            <div style={{ color: "red" }}> no</div>
          )}
        </div>
        <div style={{ margin: "10px" }}>
          <button onClick={() => setIsToggle()}>Toggle</button>
        </div>
      </div>
      <hr />
      <UseRef />
    </div>
  );
};

export default CustomHookStorage;

import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);

    console.log(emailRef.current.value);
  };
  return (
    <div className="uncontrol">
      Uncontrolled
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type={"text"} placeholder="enter your name" ref={nameRef} />
          </div>
          <div>
            {" "}
            <input
              type={"email"}
              placeholder="enter your email"
              ref={emailRef}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Uncontrolled;

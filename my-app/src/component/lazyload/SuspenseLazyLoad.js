import React, { lazy, Suspense } from "react";
const Admin = lazy(() => import("./Admin"));
const Customer = lazy(() => import("./Customer"));
const SuspenseLazyLoad = (props) => {
  if (props.user === "admin") {
    return (
      <div>
        SuspenseLazyLoad
        <div>
          <Suspense fallback={<div>loading...</div>}>
            <Admin />
          </Suspense>
        </div>
      </div>
    );
  } else if (props.user === "customer") {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Customer />
        </Suspense>
      </div>
    );
  } else {
    return <div>user not valid</div>;
  }
};

export default SuspenseLazyLoad;

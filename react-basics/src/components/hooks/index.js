import React from "react";
import UseMemo from "./BasicHooks/useMemoAnduseCallback/UseMemo";
import UseEffectVsUseMemo from "./UseEffectVsUseMemo";

const Hook = () => {
  return (
    <div className="hook">
      hook
      <div>
        <UseEffectVsUseMemo />
        <hr />
        <UseMemo />
      </div>
    </div>
  );
};

export default Hook;

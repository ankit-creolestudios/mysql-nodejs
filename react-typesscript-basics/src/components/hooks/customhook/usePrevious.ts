import { useEffect, useRef } from "react";

export const usePrevious = <T>(input: T) => {
  const ref = useRef(input);
  useEffect(() => {
    ref.current = input;
  }, [input]);
  return ref.current;
};

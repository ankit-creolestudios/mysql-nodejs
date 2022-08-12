import { Dispatch, SetStateAction, useEffect, useState } from "react";
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  const [state, setState] = useState<T | undefined>(() => {
    try {
      const locS = localStorage.getItem(key);
      return JSON.parse(locS || "");
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [state]);
  const remove = () => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {}
  };
  return [state, setState, remove];
};

// import { useCallback } from "react";

import { useRef } from "react";

const useDebounce = (cb, ms) => {
  const time = useRef(null);

  return function (...args) {
    if (time.current) {
      clearTimeout(time.current);
    }
    time.current = setTimeout(() => {
      cb.apply(this, args);
    }, ms);
  };
};

export default useDebounce;

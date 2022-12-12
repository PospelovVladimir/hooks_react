import { useEffect } from "react";

const usePagination = (refParent, refChild, callback) => {
  useEffect(() => {
    const cb = (entries, observer) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(cb, {
      root: refParent.current,
    });

    observer.observe(refChild.current);

    return () => observer.disconnect();
  }, [callback]);
};

export default usePagination;

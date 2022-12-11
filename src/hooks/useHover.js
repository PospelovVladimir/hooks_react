import { useEffect, useState } from "react";

const useHover = (ref) => {
  const [isHover, setIsHover] = useState(false);

  const on = () => setIsHover(true);
  const off = () => setIsHover(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener("mouseover", on);
    node.addEventListener("mouseout", off);

    return () => {
      node.removeEventListener("mouseover", on);
      node.removeEventListener("mouseout", off);
    };
  }, []);

  return isHover;
};

export default useHover;

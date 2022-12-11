import { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const ref = useRef();
  const isHover = useHover(ref);

  return <div ref={ref} style={{ width: "50px", height: "50px", background: isHover ? "green" : "yellow" }}></div>;
};

export default Hover;

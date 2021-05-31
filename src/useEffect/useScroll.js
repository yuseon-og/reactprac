import React, { useState, useEffect, useRef } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    console.log("y", window.scrollY, "x", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return state;
};

// export default function App() {
//   const { y } = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ color: y > 10 ? "red" : "blue" }}>Hello </h1>
//     </div>
//   );
// }

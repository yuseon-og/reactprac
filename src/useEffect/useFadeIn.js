import React, { useState, useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

// export default function App() {
//   const fadeInH1 = useFadeIn(5, 1);
//   const fadeInP = useFadeIn(10, 2);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       <p {...fadeInP}>asdfasdfasdf</p>
//     </div>
//   );
// }

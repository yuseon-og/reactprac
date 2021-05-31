import React, { useState, useEffect, useRef } from "react";

export const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };

  return { element, triggerFull, exitFull };
};

// export default function App() {
//   const onFulls = (isFull) => {
//     console.log(isFull ? "We are Full" : "We are small");
//   };
//   const { element, triggerFull, exitFull } = useFullScreen(onFulls);

//   return (
//     <div className="App">
//       <h1>Hello </h1>
//       <div ref={element}>
//         <img src="http://pencafe.img4.kr/online/renewal/img/lounge_img1.gif" />
//         <button onClick={exitFull}>Exit</button>
//       </div>
//       <button onClick={triggerFull}>Make Full Screen</button>
//     </div>
//   );
// }

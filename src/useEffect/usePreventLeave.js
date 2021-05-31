import React, { useState, useEffect, useRef } from "react";

export const usePreventLeave = () => {
  const listener = (event) => {
    event.PreventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

// export default function App() {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>UnProtect</button>
//     </div>
//   );
// }

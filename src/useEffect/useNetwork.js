import React, { useState, useEffect, useRef } from "react";

export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChage = () => {
    if (typeof onChage !== "function") {
      setStatus(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChage);
    window.addEventListener("offline", handleChage);
    return () => {
      window.removeEventListener("online", handleChage);
      window.removeEventListener("offline", handleChage);
    };
  }, []);
  return status;
};

// export default function App() {
//   const handleNetworksChange = (online) => {
//     return (
//       <h1>{online ? "we just went online" : "we just got Offline wtf"}</h1>
//     );
//   };

//   const onLine = useNetwork();

//   return (
//     <div className="App">
//       <h1>Hello{handleNetworksChange(onLine)} </h1>
//     </div>
//   );
// }

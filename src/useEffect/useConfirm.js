import React, { useState, useEffect, useRef } from "react";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

// export default function App() {
//   const deleteWord = () => console.log("deleted");
//   const abort = () => console.log("aborted");
//   const confirmDelete = useConfirm("you sure?", deleteWord, abort);

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <button onClick={confirmDelete}>Delete the word</button>
//     </div>
//   );
// }

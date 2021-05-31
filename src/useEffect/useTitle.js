import React, { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

// export default function App() {
//   const titleUpdator = useTitle("Loading...");
//   setTimeout(() => titleUpdator("Home"), 3000);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

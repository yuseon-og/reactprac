import React, { useContext } from "react";
import { useSetLang, useT } from "./context";
// import { useLogIn, useFns } from "./context";
import Header from "./Header";

const Screen = () => {
  //   const { logUserIn } = useFns();
  //   return (
  //     <div>
  //       <Header />
  //       <h1>First screen</h1>
  //       <button onClick={logUserIn}>Log User In</button>
  //     </div>
  //   );
  // };
  const setLang = useSetLang();
  const t = useT();

  return (
    <>
      <h1>{t("Hello!")}</h1>
      <button onClick={() => setLang("es")}>{t("Translate")}</button>
    </>
  );
};
// (
//   <div>
//     <Header />
//     <h1>First screen</h1>
//   </div>
// );
export default Screen;

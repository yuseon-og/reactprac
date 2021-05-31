import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "OG",
    loggedIn: false,
  });

  const logUserIn = () => setUser({ ...user, loggedIn: true });

  return (
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

const LangContext = React.createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);

  const hyperTranslate = (text) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };
  console.log(translations["es"]["Hello!"]);
  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

export default Lang;

import React, { useState, createContext, useContext } from "react";

const StudentsContext = createContext();

export const useStudentsContext = () => useContext(StudentsContext);

const StudentsContextProvider = ({ children }) => {
  const [state, setState] = useState([
    { id: 1, name: "Muhriddin", surname: "Ziyodulloyev" },
    { id: 2, name: "Zuhriddin", surname: "Ziyodulloyev" },
    { id: 3, name: "Kamol", surname: "Ziyodulloyev" },
    { id: 4, name: "Jamol", surname: "Ziyodulloyev" },
    { id: 5, name: "Ahror", surname: "Ziyodulloyev" },
    { id: 6, name: "Eshmat", surname: "Ziyodulloyev" },
    { id: 7, name: "Toshmat", surname: "Ziyodulloyev" },
  ]);
  return (
    <StudentsContext.Provider value={[state, setState]}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;

import React, { useState, createContext, useContext } from "react";

const TeachersContext = createContext();

export const useTeachersContext = () => useContext(TeachersContext);

const TeachersContextProvider = ({ children }) => {
  const [teacher, setTeacher] = useState([
    { id: 1, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 2, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 3, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 4, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 5, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 6, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 7, name: "Tosheva Malika", email: "tosheva@gmail.com" },
    { id: 8, name: "Tosheva Malika", email: "tosheva@gmail.com" },
  ]);
  return (
    <TeachersContext.Provider value={[teacher, setTeacher]}>
      {children}
    </TeachersContext.Provider>
  );
};

export default TeachersContextProvider;

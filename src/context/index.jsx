import React from "react";
import StudentsContextProvider from "./Students/Students.jsx";
import TeachersContextProvider from "./Teachers/Teachers.jsx";

const ContextGeneral = ({ children }) => {
  return (
    <StudentsContextProvider>
      <TeachersContextProvider>{children}</TeachersContextProvider>
    </StudentsContextProvider>
  );
};

export default ContextGeneral;

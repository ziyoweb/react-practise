import React from "react";
import { useStudentsContext } from "../context/Students/Students";

const Navbar = () => {
  const data = useStudentsContext();
  console.log(data);
  return <h1>Students: {data[0].length}</h1>;
};

export default Navbar;

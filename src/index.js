import React from "react";
import ReactDOM from "react-dom/client";
// import Youtube from "./Youtube";
import LifeSycle from "./Youtube/lifeSycle";
import Hook from "./Hook";
import User from "./useReducer/useState";
import UserReducer from "./useReducer/useReducer";
import Context from "./context/Students/Students.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import ContextGeneral from "./context";
import LocalStoragePractise from "./localStorage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalStoragePractise />
    {/* <Youtube /> */}
    {/* <LifeSycle /> */}
    <ContextGeneral>
      <Hook />
      <User />
      <UserReducer />
      <Navbar />
      <Body />
    </ContextGeneral>
  </React.StrictMode>
);

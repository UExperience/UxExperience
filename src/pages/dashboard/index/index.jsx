import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faPencil,
    faShield,
    faSquare,
    faSquarePen,
    faSquarePlus,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavAdmin from "../../../components/nav-admin.jsx";

const User = () => {
  return (
    <div>
    <NavAdmin /> 
    <section className="dashboard">
    </section>
</div>
  );
};

export default User;

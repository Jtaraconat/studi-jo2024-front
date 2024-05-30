import React, { useState, useEffect } from "react";
import logo24 from "../Assets/logo24.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import AxiosConfig from "../Utils/AxiosConfig";
import { useGlobalContext } from "../Utils/GlobalContext";

export default function Navbar() {
  const userId = Cookies.get("user-id");
  const { userRole, updateUserRole } = useGlobalContext();

  return (
    <div className="flex flex-col shadow shadow-joblue">
      <img src={logo24} alt="logo" className="size-24 mb-5" />
      <nav className="flex justify-around">
        <Link to="/">Accueil</Link>
        <Link to="/tickets">Tickets</Link>

        {userRole === "ADMIN" ? null : (
          <Link to="/shopping-cart">Mon panier</Link>
        )}

        {userRole === "" ? (
          <Link to="/login">Se connecter</Link>
        ) : userRole === "ADMIN" ? (
          <Link to="/admin">Espace administrateur</Link>
        ) : null}
      </nav>
    </div>
  );
}

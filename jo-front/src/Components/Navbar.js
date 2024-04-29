import React from "react";
import logo24 from "../Assets/logo24.png";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <img src={logo24} alt="logo" className="size-24 mb-5" />
      <nav className="flex justify-around">
        <a>Accueil</a>
        <a>Tickets</a>
        <a>Espace utilisateur</a>
        <a>Espace administrateur</a>
      </nav>
    </div>
  );
}

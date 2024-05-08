import React from "react";
import logo24 from "../Assets/logo24.png";

export default function Navbar() {
  return (
    <div className="flex flex-col mb-5">
      <img src={logo24} alt="logo" className="size-24 mb-5" />
      <nav className="flex justify-around">
        <a href="/">Accueil</a>
        <a href="/tickets">Tickets</a>
        <a href="/user">Espace utilisateur</a>
        <a href="/admin">Espace administrateur</a>
      </nav>
    </div>
  );
}

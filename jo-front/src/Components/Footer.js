import React from "react";
import logo from "../Assets/logo.png";
import FollowUs from "../Components/FollowUs";

export default function Footer() {
  return (
    <div className="grid grid-cols-12 p-3 bg-joblue ">
      <div className="col-span-6 ">
        <img src={logo} alt="paris logo" className="mb-10" />
        <a href="https://www.paris2024.org/fr" className="text-white">
          Paris2024.org
        </a>
      </div>

      <div className="col-span-6 flex flex-col items-end text-white font-bold ">
        <a href="">Accueil</a>
        <a href="">Tickets</a>
        <a href="">Espace utilisateur</a>
        <a href="">Espace administrateur</a>
        <a href="">C.G.V</a>
        <a href="">C.G.U</a>
        <a href="">Mentions légales</a>
      </div>

      <div className="col-span-12 grid grid-cols-12 text-white">
        <FollowUs />
      </div>
    </div>
  );
}
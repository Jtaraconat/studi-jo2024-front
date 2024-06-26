import React from "react";
import affiche from "../Assets/affiche.avif";

export default function HeroBanner() {
  return (
    <div
      className="bg-no-repeat bg-cover grid grid-cols-12 md:grid-cols-2 items-center py-20 p-2"
      style={{
        backgroundImage: `linear-gradient(rgba(110, 110, 110, 0.1), rgba( 0, 0, 0, 0.7)), url(${affiche})`,
      }}
    >
      <div className="text-white col-span-10 md:col-span-1 py-10">
        <p className="text-2xl md:text-7xl uppercase font-bold font-mukta">
          Site des Jeux olympiques de Paris 2024
        </p>
        <p className="text-lg">
          Bienvenue sur le site des Jeux olympiques et paralympiques de Paris
          2024! Pour acheter vos billets connectez-vous à votre compte, si vous
          n'en possédez pas cliquez sur "Espace utilisateur"
        </p>
      </div>
    </div>
  );
}

import React from "react";
import ceremonie from "../Assets/ceremonie.jpg";
import { useNavigate } from "react-router-dom";

export default function CeremonyCard() {
  const navigate = useNavigate();
  return (
    <div
      className="col-span-12 bg-center bg-cover bg-no-repeat py-10 text-white rounded-lg p-3"
      style={{
        backgroundImage: `linear-gradient(rgba(110, 110, 110, 0.1), rgba( 0, 0, 0, 0.7)), url(${ceremonie})`,
      }}
    >
      <h2 className="text-5xl font bold mb-3 font-mukta">
        Participez aux cérémonies d'ouverture et de fermeture des Jeux
      </h2>
      <p className="mb-3">
        N'hésitez pas à consulter nos offres pour participer aux deux cérémonies
        qui ouvriront et clotureront ces jeux olympiques.
      </p>
      <button
        className="border-2 border-white rounded-full p-3"
        onClick={() => navigate("/tickets")}
      >
        Voir les offres
      </button>
    </div>
  );
}

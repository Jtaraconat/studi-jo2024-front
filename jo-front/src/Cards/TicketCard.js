import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AxiosConfig from "../Utils/AxiosConfig";

export default function TicketCard({
  id,
  eventName,
  image,
  price,
  location,
  time,
  sport,
  city,
  ticketType,
}) {
  const POST_URI = "http://localhost:8080/api/cart/add";
  const userId = Cookies.get("user-id");
  const navigate = useNavigate();

  function addTicketToCart(e) {
    e.preventDefault();
    if (userId !== undefined) {
      axios.post(
        `${POST_URI}?userId=${userId}&ticketId=${id}&quantity=1`,
        {},
        AxiosConfig
      );
      // window.location.reload(false);
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="my-3 border-2 rounded-lg grid grid-cols-12 gap-3 items-center">
      <div className="col-span-4 border-2">
        <img src={image} alt="sport" />
      </div>

      <div className="col-span-5 flex flex-col">
        <div>
          <h3>Evènement: {eventName}</h3>
          <h4>Sport: {sport}</h4>
          <h4>Ville: {city}</h4>
        </div>

        <div>
          <p>
            Lieu: {location} à {time}
          </p>
        </div>

        <div>
          <p>Prix: {price}€/place</p>
          <p>Type d'offre: {ticketType}</p>
        </div>
      </div>

      <div className="col-span-3">
        <button
          className="border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
          onClick={addTicketToCart}
        >
          {userId === undefined ? "Se connecter" : " Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AxiosConfig from "../Utils/AxiosConfig";
import { useGlobalContext } from "../Utils/GlobalContext";

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
  day,
}) {
  const POST_URI =
    "https://studi24-backend-540631c3ca2e.herokuapp.com/api/cart/add";
  const userId = Cookies.get("user-id");
  const navigate = useNavigate();
  const [ticketAdded, setTicketAdded] = useState(false);
  const { userRole, updateUserRole } = useGlobalContext();

  async function addTicketToCart() {
    if (userId !== undefined) {
      try {
        const res = await axios.post(
          `${POST_URI}?userId=${userId}&ticketId=${id}&quantity=1`,
          {},
          AxiosConfig
        );
        setTicketAdded(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="my-3 border-2 rounded-lg grid grid-cols-12 gap-3 items-center p-3 shadow-lg">
      <div className="col-span-12 md:col-span-2 border-2 flex flex-row justify-around">
        <img className="size-20 md:size-40" src={image} alt="sport" />
      </div>

      <div className="col-span-12 md:col-span-7 flex flex-col">
        <div>
          <h3 className="font-semibold">Evènement: {eventName}</h3>
          <h4>Sport: {sport}</h4>
        </div>

        <div>
          <p>
            {day} | {time} | {city} | {location}
          </p>
        </div>

        <div>
          <p>Type d'offre: {ticketType}</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-3 flex flex-col items-center">
        <p>Prix: {price}€</p>
        {userRole === "ADMIN" ? null : (
          <button
            className="border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
            onClick={addTicketToCart}
          >
            {userId === undefined
              ? "Se connecter"
              : userId != undefined && ticketAdded
              ? "Ticket ajouté"
              : "Ajouter au panier"}
          </button>
        )}
      </div>
    </div>
  );
}

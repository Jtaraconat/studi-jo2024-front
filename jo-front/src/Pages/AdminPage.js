import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HandleOffers from "../Components/HandleTickets/HandleOffers";
import InactiveTicket from "../Components/HandleTickets/InactiveTicket";
import Cookies from "js-cookie";

export default function Admin() {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();
  const DB_URL = "https://studi24-backend-540631c3ca2e.herokuapp.com";

  useEffect(() => {
    getAllTickets();
  }, [offers.length]);

  async function getAllTickets() {
    const res = await axios.get(`${DB_URL}/api/tickets`);
    setOffers(res.data);
  }

  function addButton(e) {
    e.preventDefault();
    navigate("/admin/add-ticket");
  }

  function logout() {
    Cookies.remove("user-token");
    Cookies.remove("user-id");
    Cookies.remove("firstname");
    Cookies.remove("lastname");
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="p-2">
      <div className="my-5">
        <h2 className="text-center text-2xl">Bonjour, admin</h2>
      </div>
      <div className="my-5 flex flex-row justify-between">
        <button
          className="border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
          onClick={addButton}
        >
          Ajouter une offre
        </button>

        <button
          className="col-span-6 border-2 border-red-500 rounded-full p-3 hover:bg-red-500 hover:text-white transition-all"
          onClick={logout}
        >
          Se déconnecter
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4 my-5">
        {offers.map((item) => {
          if (item.active) {
            return (
              <HandleOffers
                key={item.id}
                ticketId={item.ticketId}
                eventName={item.eventName}
                eventLocation={item.eventLocation}
                ticketType={item.ticketType}
                time={item.time}
                day={item.day}
                image={item.image}
                price={item.price}
                sport={item.sport}
                city={item.city}
              />
            );
          }
        })}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {offers.map((item) => {
          if (!item.active) {
            return (
              <InactiveTicket
                key={item.id}
                ticketId={item.ticketId}
                eventName={item.eventName}
                eventLocation={item.eventLocation}
                ticketType={item.ticketType}
                time={item.time}
                image={item.image}
                price={item.price}
                sport={item.sport}
                city={item.city}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

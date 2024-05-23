import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HandleOffers from "../Components/HandleTickets/HandleOffers";

export default function Admin() {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  const DB_URL = "http://localhost:8080";
  useEffect(() => {
    getAllOffers();
  }, []);

  function addButton(e) {
    e.preventDefault();
    navigate("/admin/add-ticket");
  }

  async function getAllOffers() {
    const res = await axios.get(`${DB_URL}/api/tickets`);
    setOffers(res.data);
  }

  return (
    <div className="p-3">
      <div className="my-5">
        <h2 className="text-center text-2xl">Bonjour, admin</h2>
      </div>
      <div className="my-5">
        <button
          className="border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
          onClick={addButton}
        >
          Ajouter une offre
        </button>
      </div>

      <div className="grid grid-cols-12">
        {offers.map((item) => {
          return (
            <HandleOffers
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
        })}
      </div>
    </div>
  );
}

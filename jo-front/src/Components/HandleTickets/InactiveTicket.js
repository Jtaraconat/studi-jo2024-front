import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AxiosConfig from "../../Utils/AxiosConfig";

export default function InactiveTicket({
  ticketId,
  eventName,
  city,
  time,
  ticketType,
  eventLocation,
  image,
  price,
  sport,
}) {
  const navigate = useNavigate();
  const GET_ITEMS_URI = `https://studi24-backend-540631c3ca2e.herokuapp.com/api/order/orderitems/all`;
  const [offerToModify, setOfferToModify] = useState();
  const [allItemsArr, setAllItemsArr] = useState([]);

  useEffect(() => {
    setOfferToModify({
      id: ticketId,
      eventName: eventName,
      sport: sport,
      city: city,
      time: time,
      ticketType: ticketType,
      price: price,
      image: image,
      eventLocation: eventLocation,
    });
  }, []);

  useEffect(() => {
    getAllITems();
  }, []);

  async function getAllITems() {
    try {
      const res = await axios.get(GET_ITEMS_URI, AxiosConfig);
      setAllItemsArr(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function getQuantityForItem(items, ticketId) {
    try {
      return items
        .filter((item) => item.ticketId === ticketId)
        .reduce((total, item) => total + item.quantity, 0);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-span-12 grid grid-cols-12 border-2 rounded-lg p-3 items-center bg-slate-300">
      <div className="col-span-12">Ce ticket n'est plus actif:</div>

      <div className="col-span-3">
        <img src={image} alt="sport" className="size-40" />
      </div>

      <div className="col-span-9 md:col-span-4">
        <h3>Evènement: {eventName}</h3>
        <p>Type d'offre: {ticketType}</p>
        <p>Horaire: {time}</p>
        <p>Lieu: {eventLocation}</p>
        <p>Prix: {price}€ / ticket</p>
        <p>Sport: {sport}</p>
        <p>Ville: {city}</p>
      </div>

      <div className="col-span-12 text-2xl font-semibold">
        <p>
          Nombre de vente(s) pour cette offre:{" "}
          {allItemsArr.length === 0
            ? null
            : getQuantityForItem(allItemsArr, ticketId)}
        </p>
      </div>
    </div>
  );
}

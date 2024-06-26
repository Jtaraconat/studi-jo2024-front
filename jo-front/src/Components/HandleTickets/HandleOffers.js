import React from "react";
import axios, { all } from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import AxiosConfig from "../../Utils/AxiosConfig";

export default function HandleOffers({
  ticketId,
  eventName,
  city,
  time,
  day,
  ticketType,
  eventLocation,
  image,
  price,
  sport,
}) {
  const navigate = useNavigate();
  const MODIFY_PRODUCT_URI = `modify-ticket/${ticketId}`;
  const DELETE_PRODUCT_URI = `https://studi24-backend-540631c3ca2e.herokuapp.com/api/ticket/${ticketId}`;
  const GET_ITEMS_URI = `https://studi24-backend-540631c3ca2e.herokuapp.com/api/order/orderitems/all`;
  const [offerToModify, setOfferToModify] = useState();
  const [allItemsArr, setAllItemsArr] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    setOfferToModify({
      id: ticketId,
      eventName: eventName,
      sport: sport,
      city: city,
      day: day,
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

  function modifyButton(e) {
    e.preventDefault();
    navigate(MODIFY_PRODUCT_URI, { state: { offerToModify } });
  }

  async function deleteButton() {
    try {
      const res = await axios.delete(DELETE_PRODUCT_URI, AxiosConfig);
      setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  }

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
    <div className="col-span-12 grid grid-cols-12 border-2 rounded-lg p-3 items-center">
      <div className="col-span-3">
        <img src={image} alt="sport" className="size-40" />
      </div>

      <div className="col-span-9 md:col-span-4">
        <h3>Evènement: {eventName}</h3>
        <p>Type d'offre: {ticketType}</p>
        <p>Date: {day}</p>
        <p>Horaire: {time}</p>
        <p>Lieu: {eventLocation}</p>
        <p>Prix: {price}€ / ticket</p>
        <p>Sport: {sport}</p>
        <p>Ville: {city}</p>
      </div>

      <div className="col-span-12 md:col-span-5 flex flex-row justify-around">
        <button
          className="border-2 border-yellow-500 rounded-full p-3 hover:bg-yellow-500 hover:text-white transition-all"
          onClick={modifyButton}
        >
          Modifier l'offre
        </button>

        {deleted ? (
          <button className="border-2 border-red-500 rounded-full p-3 bg-red-500 text-white transition-all col-end-13">
            Ticket supprimé
          </button>
        ) : (
          <button
            className="border-2 border-red-500 rounded-full p-3 hover:bg-red-500 hover:text-white transition-all col-end-13"
            onClick={deleteButton}
          >
            Supprimer le ticket
          </button>
        )}
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

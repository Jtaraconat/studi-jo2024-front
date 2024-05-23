import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import football from "../../Assets/football.png";
import basketball from "../../Assets/basketball.png";
import handball from "../../Assets/handball.png";
import athletisme from "../../Assets/athletisme.png";
import rugby from "../../Assets/rugby.png";

export default function ModifyTicket() {
  const location = useLocation();
  const sportsImage = [football, basketball, handball, athletisme, rugby];
  const [ticketModifications, setTicketModifications] = useState({
    id: location.state.offerToModify.id,
    image: "/static/media/football.a65e79c9cf08584376f9.png",
    ticketType: "Solo",
    eventName: location.state.offerToModify.eventName,
    sport: location.state.offerToModify.sport,
    city: location.state.offerToModify.city,
    time: location.state.offerToModify.time,
    price: location.state.offerToModify.price,
    eventLocation: location.state.offerToModify.eventLocation,
  });
  const [selectedSportImage, setSelectedSportImage] = useState("football");
  const token = Cookies.get("user-token");
  const navigate = useNavigate();
  const POST_URI = `http://localhost:8080/api/ticket/${location.state.offerToModify.id}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  console.log(token);

  function getImage(e) {
    e.preventDefault();
    setSelectedSportImage(e.target.value.slice(14, -25));
    setTicketModifications({ ...ticketModifications, image: e.target.value });
  }

  function getEventName(e) {
    e.preventDefault();
    setTicketModifications({
      ...ticketModifications,
      eventName: e.target.value,
    });
  }

  function getSport(e) {
    e.preventDefault();
    setTicketModifications({ ...ticketModifications, sport: e.target.value });
  }

  function getCity(e) {
    e.preventDefault();
    setTicketModifications({ ...ticketModifications, city: e.target.value });
  }

  function getEventLocation(e) {
    e.preventDefault();
    setTicketModifications({
      ...ticketModifications,
      eventLocation: e.target.value,
    });
  }

  function getEventTime(e) {
    e.preventDefault();
    setTicketModifications({ ...ticketModifications, time: e.target.value });
  }

  function getPrice(e) {
    e.preventDefault();
    setTicketModifications({ ...ticketModifications, price: e.target.value });
  }

  function getTicketType(e) {
    e.preventDefault();
    setTicketModifications({
      ...ticketModifications,
      ticketType: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(ticketModifications);
    console.log(POST_URI);
    const res = axios.put(POST_URI, ticketModifications, config);
    navigate("/admin");
  }

  return (
    <div className="grid grid-cols-12 border-2 rounded-lg p-3 items-center">
      <div className="col-span-3">
        <img src={location.state.offerToModify.image} alt="sport" />
      </div>

      <div className="col-span-9">
        <div className="flex flex-row gap-4">
          {sportsImage.map((img, e) => {
            return (
              <div className="border-2 rounded-lg flex flex-col justify-center ">
                <img src={img} key={img} />
                <button
                  value={img}
                  onClick={getImage}
                  className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
                >
                  Sélectionner
                </button>
              </div>
            );
          })}
        </div>
        <p className="mb-5">Image sélectionée: {selectedSportImage}</p>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12  gap-1">
            <p>Nom de l'évènement: {location.state.offerToModify.eventName}</p>
            <div className="">
              <label htmlFor="event">Nouvel évènement</label>
              <input
                id="event"
                name="event"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getEventName}
                placeholder="Equipe A vs. Equipe B ou ex: Tir à l'arc"
              ></input>
            </div>
          </div>

          <div className="col-span-12">
            <p>Ville: {location.state.offerToModify.city}</p>
            <div className="">
              <label htmlFor="city">Nouvel ville</label>
              <input
                id="city"
                name="city"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getCity}
                placeholder="ex: Paris"
              ></input>
            </div>
          </div>

          <div className=" col-span-12 ">
            <p>Lieu: {location.state.offerToModify.eventLocation}</p>
            <div className="">
              <label htmlFor="eventLocation">Nouveau Lieu</label>
              <input
                id="eventLocation"
                name="eventLocation"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getEventLocation}
                placeholder="ex: Stade de France"
              ></input>
            </div>
          </div>

          <div className="col-span-12 ">
            <p>Horaire: {location.state.offerToModify.time}</p>
            <div className="">
              <label htmlFor="time">Nouveau Lieu</label>
              <input
                id="time"
                name="time"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getEventTime}
                placeholder="ex: 20h30"
              ></input>
            </div>
          </div>

          <div className="col-span-12 ">
            <p>Sport: {location.state.offerToModify.sport}</p>
            <div className="">
              <label htmlFor="sport">Nouveau sport</label>
              <input
                id="sport"
                name="sport"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getSport}
                placeholder="ex: Football"
              ></input>
            </div>
          </div>

          <div className="col-span-12 ">
            <p>Prix: {location.state.offerToModify.price}€ / ticket</p>
            <div className="">
              <label htmlFor="price">Nouveau prix</label>
              <input
                id="price"
                name="price"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getPrice}
                placeholder="ex: 50"
              ></input>
            </div>
          </div>

          <div className="col-span-12">
            <p>Type d'offre: {location.state.offerToModify.ticketType}</p>
            <div className="">
              <label htmlFor="description">Nouveau type d'offre</label>
              <select
                id="description"
                name="description"
                type="text"
                className="border-2 rounded-lg w-full"
                onChange={getTicketType}
              >
                <option>Solo</option>
                <option>Duo</option>
                <option>Familiale</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 flex flex-row h-full justify-end py-5">
        <button
          className="border-2 border-yellow-500 rounded-full p-3 hover:bg-yellow-500 hover:text-white transition-all"
          onClick={onSubmit}
        >
          Confirmer la modification
        </button>
      </div>
    </div>
  );
}

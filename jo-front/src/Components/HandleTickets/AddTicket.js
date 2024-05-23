import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import Cookies from "js-cookie";
import football from "../../Assets/football.png";
import basketball from "../../Assets/basketball.png";
import handball from "../../Assets/handball.png";
import athletisme from "../../Assets/athletisme.png";
import rugby from "../../Assets/rugby.png";
import AxiosConfig from "../../Utils/AxiosConfig";

export default function AddTicket() {
  const [ticketToAdd, setTicketToAdd] = useState({
    image: "/static/media/football.a65e79c9cf08584376f9.png",
    ticketType: "Solo",
  });
  const sportsImage = [football, basketball, handball, athletisme, rugby];
  const [selectedSportImage, setSelectedSportImage] = useState("football");
  const token = Cookies.get("user-token");
  const navigate = useNavigate();
  const POST_URI = "http://localhost:8080/api/ticket";

  function getImage(e) {
    e.preventDefault();
    setSelectedSportImage(e.target.value.slice(14, -25));
    setTicketToAdd({ ...ticketToAdd, image: e.target.value });
  }

  function getEventName(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, eventName: e.target.value });
  }

  function getSport(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, sport: e.target.value });
  }

  function getCity(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, city: e.target.value });
  }

  function getEventLocation(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, eventLocation: e.target.value });
  }

  function getEventTime(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, time: e.target.value });
  }

  function getPrice(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, price: e.target.value });
  }

  function getTicketType(e) {
    e.preventDefault();
    setTicketToAdd({ ...ticketToAdd, ticketType: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(ticketToAdd);
    const res = axios.post(POST_URI, ticketToAdd, AxiosConfig);
    navigate("/admin");
  }

  return (
    <div className=" my-5">
      <form className="rounded-lg shadow-lg flex flex-col justify-around p-5">
        <div className="text-center">
          <h2 className="text-3xl">Créer une offre</h2>
        </div>

        <div className="flex flex-col w-full">
          <div className="my-5">
            <p>Sélectionner une image</p>

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
            <p>Image sélectionée: {selectedSportImage}</p>
          </div>

          <label htmlFor="eventName">Nom de l'évènement:</label>
          <input
            type="text"
            id="eventName"
            className="border-2 rounded-lg p-1"
            placeholder="Equipe A vs Equipe B"
            onChange={getEventName}
          ></input>

          <label htmlFor="sport">Sport:</label>
          <input
            type="text"
            id="sport"
            className="border-2 rounded-lg p-1"
            onChange={getSport}
          ></input>

          <label htmlFor="city">Ville:</label>
          <input
            type="text"
            id="city"
            className="border-2 rounded-lg p-1"
            onChange={getCity}
          ></input>

          <label htmlFor="location">Lieu de l'évènement:</label>
          <input
            type="text"
            id="location"
            className="border-2 rounded-lg p-1"
            onChange={getEventLocation}
          ></input>

          <label htmlFor="time">Horaire:</label>
          <input
            type="text"
            id="time"
            className="border-2 rounded-lg p-1"
            placeholder="exemple: 20h30"
            onChange={getEventTime}
          ></input>

          <label htmlFor="price">Prix:</label>
          <input
            type="text"
            id="price"
            className="border-2 rounded-lg p-1"
            onChange={getPrice}
          ></input>

          <label htmlFor="ticketType">Type d'offre:</label>
          <select
            className="border-2 rounded-lg p-1"
            onChange={getTicketType}
            id="ticketType"
          >
            <option>Solo</option>
            <option>Duo</option>
            <option>Familiale</option>
          </select>
        </div>

        <div className="flex flex-row justify-end">
          <button
            className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all my-3"
            onClick={onSubmit}
          >
            Créer l'offre
          </button>
        </div>
      </form>
    </div>
  );
}

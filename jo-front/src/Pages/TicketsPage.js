import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketCard from "../Cards/TicketCard";
import BlueActiveButton from "../Components/BlueActiveButton";
import BlueInactiveButton from "../Components/BlueInactiveButton";

export default function Tickets() {
  const DB_URL = "https://studi24-backend-540631c3ca2e.herokuapp.com";
  const [allTickets, setAllTickets] = useState([]);
  const [citySearchInput, setCitySearchInput] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [checkedValue, setCheckedValue] = useState("Tous les tickets");
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    getAllTickets();
  }, []);

  async function getAllTickets() {
    const res = await axios.get(`${DB_URL}/api/tickets`);

    res.data.map((ticket) => {
      setAllTickets(res.data);
    });
  }

  async function getCities() {
    try {
      const res = await axios.get(
        `https://geo.api.gouv.fr/communes?nom=${citySearchInput}&boost=population`
      );
      setCityFilter(res.data[0].nom);
    } catch (error) {}
  }

  function filterByCity(e) {
    setCitySearchInput(e.target.value);
    getCities();
  }

  function getValue(e) {
    setCheckedValue(e.target.textContent);
    setSelectedButton(e.target.textContent);
  }

  return (
    <div className="my-5 p-2">
      <div className="my-3">
        <h2 className="text-5xl text-center">Découvrez nos offres</h2>
      </div>

      <div className="grid grid-cols-12 my-8 gap-4">
        <div className="col-span-12 grid grid-cols-12 gap-4 my-4">
          <div className="col-span-6 flex flex-col">
            <label htmlFor="city">Rechercher une ville</label>
            <input
              type="text"
              className="border rounded-lg p-2"
              id="city"
              name="city"
              placeholder="Ville ou code postal"
              onChange={filterByCity}
            ></input>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-4 md:flex flex-row md:justify-around">
          {checkedValue === "Tous les tickets" ? (
            <BlueActiveButton getValue={getValue} text={"Tous les tickets"} />
          ) : (
            <BlueInactiveButton getValue={getValue} text={"Tous les tickets"} />
          )}

          {checkedValue === "Les offres solo" ? (
            <BlueActiveButton getValue={getValue} text={"Les offres solo"} />
          ) : (
            <BlueInactiveButton getValue={getValue} text={"Les offres solo"} />
          )}

          {checkedValue === "Les offres duo" ? (
            <BlueActiveButton getValue={getValue} text={"Les offres duo"} />
          ) : (
            <BlueInactiveButton getValue={getValue} text={"Les offres duo"} />
          )}

          {checkedValue === "Les offres familiale" ? (
            <BlueActiveButton
              getValue={getValue}
              text={"Les offres familiale"}
            />
          ) : (
            <BlueInactiveButton
              getValue={getValue}
              text={"Les offres familiale"}
            />
          )}
        </div>

        <div className="col-span-12">
          <h2 className="text-lg font-semibold">Bon à savoir:</h2>
          <p>Nos tickets sont vendus sous forme d'offre: </p>
          <p>Une offre solo donne accès à un évènement à une personne.</p>
          <p>Une offre duo donne accès à un évènement à deux personnes.</p>
          <p>
            Une offre familiale donne accès à un évènement à quatre personnes.
          </p>
        </div>
      </div>

      <div>
        <div>
          {checkedValue === "Tous les tickets" ? (
            <h2 className="text-2xl text-joblue">Tous les tickets</h2>
          ) : checkedValue === "Les offres solo" ? (
            <h2 className="text-2xl text-joblue">Les offres solo</h2>
          ) : checkedValue === "Les offres duo" ? (
            <h2 className="text-2xl text-joblue">Les offres duo</h2>
          ) : checkedValue === "Les offres familiale" ? (
            <h2 className="text-2xl text-joblue">Les offres familiale</h2>
          ) : null}
        </div>
        <div>
          <div>
            {allTickets.map((item) => {
              if (
                item.active &&
                checkedValue === "Tous les tickets" &&
                citySearchInput === ""
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              } else if (
                item.active &&
                checkedValue === "Tous les tickets" &&
                citySearchInput === item.city.toLowerCase()
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              }
            })}
          </div>
        </div>

        <div>
          <div>
            {allTickets.map((item) => {
              if (
                item.active &&
                checkedValue === "Les offres solo" &&
                citySearchInput === "" &&
                item.ticketType === "Solo"
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              } else if (
                item.active &&
                checkedValue === "Les offres solo" &&
                citySearchInput === item.city.toLowerCase() &&
                item.ticketType === "Solo"
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              }
            })}
          </div>
        </div>

        <div>
          <div>
            {allTickets.map((item) => {
              if (
                item.active &&
                checkedValue === "Les offres duo" &&
                citySearchInput === "" &&
                item.ticketType === "Duo"
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              } else if (
                item.active &&
                checkedValue === "Les offres duo" &&
                citySearchInput === item.city.toLowerCase() &&
                item.ticketType === "Duo"
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              }
            })}
          </div>
        </div>

        <div>
          <div>
            {allTickets.map((item) => {
              if (
                item.active &&
                checkedValue === "Les offres familiale" &&
                citySearchInput === "" &&
                item.ticketType === "Familiale"
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              } else if (
                item.active &&
                checkedValue === "Les offres familiale" &&
                citySearchInput === item.city.toLowerCase() &&
                item.ticketType === "Familiale"
              ) {
                return (
                  <TicketCard
                    id={item.id}
                    key={item.id}
                    eventName={item.eventName}
                    location={item.eventLocation}
                    time={item.time}
                    image={item.image}
                    price={item.price}
                    sport={item.sport}
                    city={item.city}
                    ticketType={item.ticketType}
                    day={item.day}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

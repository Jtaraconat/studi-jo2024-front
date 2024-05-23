import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import TicketCard from "../Cards/TicketCard";
import AxiosConfig from "../Utils/AxiosConfig";
import Cookies from "js-cookie";

export default function Tickets() {
  const DB_URL = "http://localhost:8080";
  const [allTickets, setAllTickets] = useState([]);
  const [cityArr, setCityArr] = useState(["Toutes les villes"]);
  const [sportArr, setSportArr] = useState(["Tous les sports"]);
  const [cityFilter, setCityFilter] = useState("Toutes les villes");
  const [sportFilter, setSportFilter] = useState("Tous les sports");
  const [ticketTypeFilter, setTicketTypeFilter] = useState("Solo");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTickets();
  }, []);

  async function getAllTickets() {
    const res = await axios.get(`${DB_URL}/api/tickets`, AxiosConfig);

    res.data.map((ticket) => {
      setCityArr([...cityArr, ticket.city]);
      setSportArr([...sportArr, ticket.sport]);
      setAllTickets(res.data);
    });
    setIsLoading(false);
  }

  function filterByCity(e) {
    setCityFilter(e.target.value);
  }

  function filterBySport(e) {
    setSportFilter(e.target.value);
  }

  function filterByTicketType(e) {
    setTicketTypeFilter(e.target.value);
  }

  return (
    <div className="my-5">
      <div className="my-3">
        <h2 className="text-5xl text-center">Découvrez nos offres</h2>
      </div>

      <div className="flex flex-row justify-around my-8">
        <div className="flex flex-col">
          <label htmlFor="city">Selectionner une ville</label>
          <select
            type="select"
            id="city"
            className="border rounded-lg"
            onChange={filterByCity}
          >
            {cityArr.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="event">Selectionner un événement</label>
          <select
            type="select"
            id="event"
            className="border rounded-lg"
            onChange={filterBySport}
          >
            {sportArr.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="city">Selectionner un type d'offre</label>
          <select
            type="ticket-type"
            id="ticket-type"
            className="border rounded-lg"
            onChange={filterByTicketType}
          >
            <option>Toutes les offres</option>
            <option>Solo</option>
            <option>Duo</option>
            <option>Familiale</option>
          </select>
        </div>
      </div>

      {allTickets.map((item) => {
        if (
          cityFilter === "Toutes les villes" &&
          sportFilter === "Tous les sports"
        )
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
            />
          );
        else if (
          cityFilter === item.city ||
          sportFilter === item.sport ||
          ticketTypeFilter === item.ticketType
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
            />
          );
        }
      })}
    </div>
  );
}

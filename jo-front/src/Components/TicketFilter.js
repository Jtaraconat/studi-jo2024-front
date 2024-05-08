import React from "react";

export default function TicketFilter() {
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col">
        <label htmlFor="city">Selectionner une ville</label>
        <select type="select" id="city" className="border rounded-lg">
          {/*options map sur city dans les billets */}
          <option>option 1</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="event">Selectionner un événement</label>
        <select type="select" id="event" className="border rounded-lg">
          {/*options map sur city dans les events */}
          <option>option 1</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="city">Selectionner une ville</label>
        <select type="select" id="city" className="border rounded-lg">
          {/*options map sur city dans les villes */}
          <option>option 1</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="price">Prix:</label>
        <input
          type="range"
          id="price"
          min={"0" /* min dispo on ticket price*/}
          max={"100" /* max dispo on ticket price */}
          step={"10"}
          className="border rounded-lg"
        ></input>
      </div>
    </div>
  );
}

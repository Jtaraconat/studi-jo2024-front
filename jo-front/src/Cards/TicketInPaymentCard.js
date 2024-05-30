import React from "react";

export default function TicketInPaymentCard({
  eventName,
  quantity,
  price,
  ticketType,
  sport,
  date,
}) {
  return (
    <div className="grid grid-cols-12 border-2 shadow-lg rounded-lg my-4 p-3">
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-12 ">
          <p>Sport: {sport}</p>
          <p className="">Evènement sélectionné: {eventName}</p>
          <p>Le: {date}</p>
          <p className="">Prix unitaire: {price}€</p>
          <p>Offre: {ticketType}</p>
        </div>
      </div>

      <div className="col-span-12">
        <p>Soit un total pour cet événèment de: {quantity * price}€</p>
      </div>
    </div>
  );
}

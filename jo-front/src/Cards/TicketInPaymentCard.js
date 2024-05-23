import React from "react";

export default function TicketInPaymentCard({ eventName, quantity, price }) {
  return (
    <div className="grid grid-cols-12 border-2 rounded-lg my-4 p-3">
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-4">
          <h2 className="">Evènement sélectionné: {eventName}</h2>
          <p className="text-center">Prix unitaire: {price}</p>
        </div>
      </div>

      <div className="col-span-12">
        <p>Soit un total pour cet événèment de: {quantity * price}€</p>
      </div>
    </div>
  );
}

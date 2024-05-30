import React from "react";
import { useLocation } from "react-router-dom";
import TicketInPaymentCard from "../Cards/TicketInPaymentCard";
import Cookies from "js-cookie";
import PaymentInfos from "../Components/PaymentInfos";

export default function PaiementPage() {
  const location = useLocation();
  const userId = Cookies.get("user-id");

  let totalPrice = 0;
  console.log(location.state);

  return (
    <div className="p-3 grid grid-cols-12">
      <h2 className="col-span-12 text-center text-2xl">
        Récapitulatif de la commande:
      </h2>
      <div className="col-span-12">
        {location.state.itemsInCart.map((item) => {
          return (
            <TicketInPaymentCard
              key={item.cartItemID}
              ticketId={item.ticketID}
              userId={userId}
              eventName={item.eventName}
              quantity={item.quantity}
              price={item.price}
              ticketType={item.ticketType}
              sport={item.sport}
              date={item.day}
            />
          );
        })}
      </div>

      <div className="col-span-12 text-end text-xl font-semibold">
        Total de la commande:{" "}
        {location.state.itemsInCart.map((item) => {
          totalPrice += item.price * item.quantity;
        })}
        {totalPrice}€
      </div>

      <div className="col-span-12 my-8">
        <p>Vos billets vous serons envoyé sur votre adresse e-mail.</p>
      </div>

      <div className="col-span-12 my-5">
        <h2>Informations de paiement:</h2>
        <PaymentInfos userId={userId} state={location.state.itemsInCart} />
      </div>
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";
import TicketInPaymentCard from "../Cards/TicketInPaymentCard";
import Cookies from "js-cookie";
import axios from "axios";

export default function PaiementPage() {
  const location = useLocation();
  const userId = Cookies.get("user-id");
  const POST_URI = `http://localhost:8080/api/order/create/${userId}`;
  let totalPrice = 0;

  async function payOrder() {
    const res = await axios.post(POST_URI);
    console.log(res);
  }

  return (
    <div>
      <h2 className="text-center text-2xl">Récapitulatif de la commande:</h2>
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
            />
          );
        })}
      </div>

      <div>
        Total de la commande:{" "}
        {location.state.itemsInCart.map((item) => {
          totalPrice += item.price * item.quantity;
        })}
        {totalPrice}€
      </div>

      {/*Form info acheteur */}
      {/*Mock paiement */}

      <button
        className="col-span-6 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
        onClick={payOrder}
      >
        Payer la commande
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import TicketInCartCard from "../Cards/TicketInCartCard";
import AxiosConfig from "../Utils/AxiosConfig";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const userToken = Cookies.get("user-token");
  const userId = Cookies.get("user-id");
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const [itemsInCart, setItemsInCart] = useState([]);

  const token = Cookies.get();
  console.log(token);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/cart/items/${userId}`,
        AxiosConfig
      );
      console.log(res);

      res.data.map((item) => {
        setItemsInCart(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    Cookies.remove("user-token");
    Cookies.remove("user-id");
    Cookies.remove("firstname");
    Cookies.remove("lastname");
    navigate("/");
  }

  function goToPayment() {
    navigate("/payment", { state: { itemsInCart } });
  }

  return (
    <div className="grid grid-cols-12 p-3">
      <div className="col-span-12">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl uppercase">
              Bonjour {firstname} {lastname}
            </h2>
          </div>

          <div>
            <button
              className="col-span-6 border-2 border-red-500 rounded-full p-3 hover:bg-red-500 hover:text-white transition-all"
              onClick={logout}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>

      {itemsInCart.length === 0 ? (
        <div className="col-span-12 my-5">
          <p className="text-center text-3xl font-semibold">
            Votre panier est vide!
          </p>
        </div>
      ) : (
        <div className="col-span-12">
          {itemsInCart.map((item) => {
            return (
              <TicketInCartCard
                key={item.cartItemID}
                ticketId={item.ticketID}
                cartItemId={item.cartItemID}
                userId={userId}
                eventName={item.eventName}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}
        </div>
      )}

      {itemsInCart === 0 ? (
        <div className="col-span-12 flex flex-row justify-end">
          <button
            className="col-span-6 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
            onClick={() => navigate("/tickets")}
          >
            Voir les tickets
          </button>
        </div>
      ) : (
        <div className="col-span-12 flex flex-row justify-end">
          <button
            className="col-span-6 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all"
            onClick={goToPayment}
          >
            Procéder au paiement
          </button>
        </div>
      )}
    </div>
  );
}

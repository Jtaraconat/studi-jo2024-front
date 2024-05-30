import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TicketInCartCard from "../Cards/TicketInCartCard";
import AxiosConfig from "../Utils/AxiosConfig";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const userId = Cookies.get("user-id");
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const [itemsInCart, setItemsInCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const GET_URL = "https://studi24-backend-540631c3ca2e.herokuapp.com";

  useEffect(() => {
    getItems();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  async function getItems() {
    try {
      const res = await axios.get(
        `${GET_URL}/api/cart/items/${userId}`,
        AxiosConfig
      );
      setItemsInCart(res.data);
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
    window.location.reload();
  }

  function goToPayment() {
    if (itemsInCart.length != 0) {
      navigate("/payment", { state: { itemsInCart } });
    }
  }

  return (
    <div className="grid grid-cols-12 p-2">
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

      {itemsInCart.length === 0 && !isLoading ? (
        <div className="col-span-12 my-5">
          <p className="text-center text-3xl font-semibold">
            Votre panier est vide!
          </p>
        </div>
      ) : isLoading ? (
        <div className="col-span-12 my-5">
          <p className="text-center text-3xl font-semibold animate-pulse">
            Chargement...
          </p>
        </div>
      ) : (
        <div className="col-span-12">
          {itemsInCart.map((item) => {
            return (
              <TicketInCartCard
                key={item.cartItemID}
                cartItemId={item.cartItemID}
                eventName={item.eventName}
                price={item.price}
                image={item.imageURL}
                day={item.day}
                time={item.time}
                ticketType={item.ticketType}
                sport={item.sport}
                city={item.city}
                location={item.eventLocation}
              />
            );
          })}
        </div>
      )}

      {itemsInCart.length === 0 ? (
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
            className="col-span-6 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all text-xl"
            onClick={goToPayment}
          >
            Procéder au paiement
          </button>
        </div>
      )}
    </div>
  );
}

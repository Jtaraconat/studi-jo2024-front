import React, { useState } from "react";
import axios, { Axios } from "axios";
import AxiosConfig from "../Utils/AxiosConfig";

export default function TicketInCartCard({
  ticketId,
  cartItemId,
  userId,
  eventName,
  quantity,
  price,
  totalPrice,
}) {
  const [count, setCount] = useState(quantity);
  const [load, setLoad] = useState(false);
  const POST_URI = "http://localhost:8080/api/cart/add";
  const DELETE_URI = `http://localhost:8080/api/cart/item/${cartItemId}`;

  function add() {
    setCount(count + 1);
  }

  function substract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  async function updateQuantity() {
    try {
      const res = await axios.post(
        `${POST_URI}?userId=452&ticketId=${ticketId}&quantity=${count}`,
        {},
        AxiosConfig
      );
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteItem() {
    try {
      const res = await axios.delete(DELETE_URI);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-12 border-2 rounded-lg my-4 p-3">
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-4">
          <h2 className="">Evènement sélectionné: {eventName}</h2>
          <p className="text-center">Prix unitaire: {price}€</p>
        </div>

        <div className="col-span-4 flex flex-col">
          <p className="text-center">Quantité: {quantity}</p>
          <div className="flex flex-row gap-2 justify-center items-center">
            <button className="border-2 rounded-lg p-3" onClick={substract}>
              -
            </button>
            <p>{count}</p>
            <button className="border-2 rounded-lg p-3" onClick={add}>
              +
            </button>
          </div>
        </div>

        <div className="col-span-4 grid grid-cols-12 gap-4">
          <button
            type="submit"
            className=" col-span-6 border-2 border-yellow-500 rounded-full p-3 hover:bg-yellow-500 hover:text-white transition-all"
            onClick={updateQuantity}
          >
            Mettre à jour la quantité
          </button>
          <button
            className="col-span-6 border-2 border-red-500 rounded-full p-3 hover:bg-red-500 hover:text-white transition-all"
            onClick={deleteItem}
          >
            Supprimer
          </button>
        </div>
      </div>

      <div className="col-span-12">
        <p>Soit un total pour cet événèment de: {quantity * price}€</p>
      </div>
    </div>
  );
}

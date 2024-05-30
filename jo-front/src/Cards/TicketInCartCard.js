import React, { useState } from "react";
import axios from "axios";
import AxiosConfig from "../Utils/AxiosConfig";

export default function TicketInCartCard({
  cartItemId,
  eventName,
  day,
  time,
  ticketType,
  sport,
  city,
  location,
  image,
}) {
  const DELETE_URI = `https://studi24-backend-540631c3ca2e.herokuapp.com/api/cart/item/${cartItemId}`;
  const [deleted, setDeleted] = useState(false);

  async function deleteItem() {
    try {
      const res = await axios.delete(DELETE_URI, AxiosConfig);
      setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-12 border-2 rounded-lg my-4 p-3 shadow-lg">
      <div className="col-span-12 grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-2 flex flex-row justify-center">
          <img className="size-40" src={image} alt="sport" />
        </div>

        <div className="col-span-12 md:col-span-10 grid grid-cols-12">
          <div className="col-span-9 flex flex-col">
            <div>
              <h3 className="font-semibold">Evènement: {eventName}</h3>
              <h4>Sport: {sport}</h4>
            </div>

            <div>
              <p>
                {day} | {time} | {city} | {location}
              </p>
            </div>

            <div>
              <p>Type d'offre: {ticketType}</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 col-end-13 flex flex-col justify-center">
            {deleted ? (
              <button className="border-2 border-red-500 rounded-full p-3 bg-red-500 text-white transition-all col-end-13">
                Ticket supprimé
              </button>
            ) : (
              <button
                className="border-2 border-red-500 rounded-full p-3 hover:bg-red-500 hover:text-white transition-all col-end-13"
                onClick={deleteItem}
              >
                Supprimer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/*




//UPDATE QUANTITY UTILITIES
//const POST_URI = "http://localhost:8080/api/cart/add";
//const [count, setCount] = useState(quantity);

{
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
}

{
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
}

{
   <button
            type="submit"
            className=" col-span-6 border-2 border-yellow-500 rounded-full p-3 hover:bg-yellow-500 hover:text-white transition-all"
            onClick={updateQuantity}
          >
            Mettre à jour la quantité
          </button> 
}
*/

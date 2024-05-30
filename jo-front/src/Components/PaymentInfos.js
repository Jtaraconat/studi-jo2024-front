import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import AxiosConfig from "../Utils/AxiosConfig";
import mastercard from "../Assets/Payment/mastercard.png";
import amex from "../Assets/Payment/amex.png";
import visa from "../Assets/Payment/visa.png";

export default function PaymentInfos({ userId, state }) {
  const [ownerNameErrorMessage, setOwnerNameErrorMessage] = useState();
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState("");
  const [expirationDateErrorMessage, setExpirationDateErrorMessage] =
    useState("");
  const [cvcErrorMessage, setCvcErrorMessage] = useState("");
  const [payErrorMessage, setPayErrorMessage] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const POST_URI = `https://studi24-backend-540631c3ca2e.herokuapp.com/api/order/create/${userId}`;
  const DELETE_URI = `https://studi24-backend-540631c3ca2e.herokuapp.com/api/cart/item/`;
  const navigate = useNavigate();

  function handleOwnerName(e) {
    const inputRegex = /[A-Za-z]+\s[A-Za-z]+/i;
    if (
      inputRegex.test(e.target.value) === true &&
      e.target.value !== "" &&
      e.target.id === "name"
    ) {
      setOwnerNameErrorMessage("");
      setOwnerName(e.target.value);
    } else {
      setOwnerNameErrorMessage(
        "Ce champ doit contenir un nom et un prénom séparé d'un espace"
      );
    }
  }

  function handleCardNumber(e) {
    const inputRegex = /^\d{16}$/;
    if (
      inputRegex.test(e.target.value) === true &&
      e.target.value !== "" &&
      e.target.id === "cardNumber"
    ) {
      setCardNumberErrorMessage("");
      setCardNumber(e.target.value);
    } else {
      setCardNumberErrorMessage(
        "Ce champ doit contenir 16 chiffres compris entre 0 et 9"
      );
    }
  }

  function handleExpirationDate(e) {
    const inputRegex = /^1[0-2]|[1-9]\/[0-9]+/i;
    if (
      inputRegex.test(e.target.value) === true &&
      e.target.value !== "" &&
      e.target.id === "expiration"
    ) {
      setExpirationDateErrorMessage("");
      setExpirationDate(e.target.value);
    } else {
      setExpirationDateErrorMessage(
        'Ce champ doit contenir 4 chiffres séparés par "/"'
      );
    }
  }

  function handleCvc(e) {
    const inputRegex = /^\d{3}$/;
    if (
      inputRegex.test(e.target.value) === true &&
      e.target.value !== "" &&
      e.target.id === "cvc"
    ) {
      setCvcErrorMessage("");
      setCvc(e.target.value);
    } else {
      setCvcErrorMessage(
        "Ce champ doit contenir 3 chiffres compris entre 0 et 9"
      );
    }
  }

  async function payOrder() {
    if (
      ownerName !== "" &&
      cardNumber !== "" &&
      cardNumber !== "" &&
      expirationDate !== "" &&
      cvc !== ""
    ) {
      setPayErrorMessage("");
      try {
        const res = await axios.post(POST_URI, {}, AxiosConfig);
        if (res.status === 200) {
          for await (let item of state) {
            const del = await axios.delete(
              `${DELETE_URI}${item.cartItemID}`,
              AxiosConfig
            );
            navigate("/payment-success");
          }
        }
      } catch (error) {}
    } else {
      setPayErrorMessage("Un ou plusieurs champs sont manquants");
    }
  }

  return (
    <div className="grid grid-cols-12 border-2 rounded-lg p-3 gap-4">
      <div className="col-span-12">
        <div>
          <label htmlFor="name">Nom du titulaire</label>
          <input
            type="text"
            id="name"
            className="border-2 rounded-lg w-full p-2"
            placeholder="François Dupont"
            onChange={handleOwnerName}
          ></input>
          <p className="text-xs text-red-500">{ownerNameErrorMessage}</p>
        </div>
      </div>

      <div className="col-span-12">
        <p>Numéro de carte</p>
      </div>

      <div className="col-span-12 grid grid-cols-12 items-center border-2 rounded-lg w-full p-2">
        <div className="col-span-12 md:col-span-10">
          <input
            type="text"
            id="cardNumber"
            className="p-2 w-full"
            placeholder="1234 1234 1234 1234"
            onChange={handleCardNumber}
          ></input>
        </div>
        <div className="col-span-12 md:col-span-2 flex flex-row ">
          <img src={mastercard} alt="mastercard" className="size-10" />
          <img src={visa} alt="visa" className="size-10" />
          <img src={amex} alt="amex" className="size-10" />
        </div>

        <div className="col-span-12">
          <p className="text-xs text-red-500">{cardNumberErrorMessage}</p>
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <label htmlFor="expiration">Date d'expiration</label>
          <input
            id="expiration"
            type="text"
            placeholder="MM/YY"
            className="border-2 rounded-lg w-full p-2"
            onChange={handleExpirationDate}
          ></input>
          <p className="text-xs text-red-500">{expirationDateErrorMessage}</p>
        </div>

        <div className="col-span-6">
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            type="text"
            placeholder="CVC"
            className="border-2 rounded-lg w-full p-2"
            onChange={handleCvc}
          ></input>
          <p className="text-xs text-red-500">{cvcErrorMessage}</p>
        </div>

        <div className="col-span-12">
          <p className="text-end text-sm">
            *Ce formulaire ne collecte aucunes informations
          </p>
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 ">
        <button
          className="col-span-6 col-end-13 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-500 hover:text-white transition-all "
          onClick={payOrder}
        >
          Payer la commande
        </button>
        <p className="col-span-6 col-end-13 text-red-500 text-center">
          {payErrorMessage}
        </p>
      </div>
    </div>
  );
}

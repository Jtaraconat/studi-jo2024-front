import React, { useState, useEffect } from "react";
import logo24 from "../Assets/logo24.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import AxiosConfig from "../Utils/AxiosConfig";

export default function Navbar() {
  const userId = Cookies.get("user-id");
  const [cartLength, setCartLength] = useState();
  let count = 0;

  async function getItems() {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/cart/items/${userId}`,
        AxiosConfig
      );
      setCartLength(res.data.reduce((total, item) => total + item.quantity, 0));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getItems();
  }, [cartLength]);

  return (
    <div className="flex flex-col mb-5">
      <img src={logo24} alt="logo" className="size-24 mb-5" />
      <nav className="flex justify-around">
        <Link to="/">Accueil</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/shopping-cart">
          {cartLength === 0 ? `Panier(x${cartLength})` : "Panier"}
        </Link>
        <Link to="/admin">Espace administrateur</Link>
      </nav>
    </div>
  );
}

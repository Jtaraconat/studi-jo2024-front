import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginForm({ text, userUrl }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const POST_URL =
    "https://studi24-backend-540631c3ca2e.herokuapp.com/api/login";
  const navigate = useNavigate();
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  function handleEmail(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value) === true && e.target.value !== "") {
      setEmailMessage("");
      setCredentials({ ...credentials, email: e.target.value });
    } else {
      setEmailMessage("L'adresse e-mail n'est pas valide");
    }
  }

  function getPassword(e) {
    e.preventDefault();
    setCredentials({ ...credentials, password: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      if (credentials.email !== "" && credentials.password !== "") {
        setEmailMessage("");
        setPasswordMessage("");
        const res = await axios.post(POST_URL, credentials);

        Cookies.set("user-token", res.data.token);
        Cookies.set("user-id", res.data.userId);
        Cookies.set("firstname", res.data.firstname);
        Cookies.set("lastname", res.data.lastname);

        navigate("/tickets");
        window.location.reload();
      } else {
        setPasswordMessage("Veuillez saisir un mot de passe");
        setEmailMessage("Veuillez saisir un email");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" my-5">
      <form className="rounded-lg shadow-lg flex flex-col justify-around p-5">
        <div className="text-center">
          <h2 className="text-3xl">Veuillez vous connecter</h2>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <label htmlFor="e-mail">Email:</label>
            <input
              type="text"
              id="e-mail"
              className="border-2 rounded-lg p-1"
              onChange={handleEmail}
            ></input>
            <p className="text-xs text-red-500">{emailMessage}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              className="border-2 rounded-lg p-1"
              onChange={getPassword}
            ></input>
            <p className="text-xs text-red-500">{passwordMessage}</p>
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <button
            className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all my-3"
            onClick={onSubmit}
          >
            Se connecter
          </button>
        </div>

        <div className="flex flex-row p-2 mt-3">
          <a href={userUrl}>{text}</a>
        </div>
      </form>
    </div>
  );
}

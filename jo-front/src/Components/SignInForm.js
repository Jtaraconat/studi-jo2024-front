import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const POST_URL =
    "https://studi24-backend-540631c3ca2e.herokuapp.com/api/register";
  const navigate = useNavigate();
  const [emailMessage, setEmailMessage] = useState("");
  const [globalErrorMessage, setGlobalErrorMessage] = useState("");

  function getFirstname(e) {
    e.preventDefault();
    setCredentials({ ...credentials, firstname: e.target.value });
  }

  function getLastname(e) {
    e.preventDefault();
    setCredentials({ ...credentials, lastname: e.target.value });
  }

  function getPassword(e) {
    e.preventDefault();
    setCredentials({ ...credentials, password: e.target.value });
  }

  function handleEmail(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value) === true && e.target.value !== "") {
      setEmailMessage("");
      setCredentials({ ...credentials, email: e.target.value });
    } else {
      setEmailMessage("L'adresse e-mail n'est pas valide");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (
      credentials.email !== "" &&
      credentials.firstname !== "" &&
      credentials.lastname !== "" &&
      credentials.password !== ""
    ) {
      try {
        const res = await axios.post(POST_URL, credentials);
        navigate("/login");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      setGlobalErrorMessage("Un ou plusieurs champs sont manquants");
    }
  }

  return (
    <div className=" my-5">
      <form className="rounded-lg shadow-lg flex flex-col justify-around p-5">
        <div className="text-center">
          <h2 className="text-3xl">Créer un compte</h2>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="lastname">Nom:</label>
          <input
            type="text"
            id="lastname"
            className="border-2 rounded-lg p-1"
            onChange={getLastname}
          ></input>

          <label htmlFor="firstname">Prénom:</label>
          <input
            type="text"
            id="firstname"
            className="border-2 rounded-lg p-1"
            onChange={getFirstname}
          ></input>

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

          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            className="border-2 rounded-lg p-1"
            onChange={getPassword}
          ></input>
        </div>

        <div className="flex flex-row justify-end">
          <div className="flex flex-col">
            <button
              className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all my-3"
              onClick={onSubmit}
            >
              Créer un compte
            </button>
            <p className="text-cs text-red-500">{globalErrorMessage}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

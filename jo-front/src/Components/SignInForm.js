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
  const POST_URL = "http://localhost:8080/api/register";
  const navigate = useNavigate();

  function getFirstname(e) {
    e.preventDefault();
    setCredentials({ ...credentials, firstname: e.target.value });
  }

  function getLastname(e) {
    e.preventDefault();
    setCredentials({ ...credentials, lastname: e.target.value });
  }

  function getEmail(e) {
    e.preventDefault();
    setCredentials({ ...credentials, email: e.target.value });
  }

  function getPassword(e) {
    e.preventDefault();
    setCredentials({ ...credentials, password: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(POST_URL, credentials);
      navigate("/tickets");
    } catch (error) {
      console.log(error);
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

          <label htmlFor="e-mail">Email:</label>
          <input
            type="text"
            id="e-mail"
            className="border-2 rounded-lg p-1"
            onChange={getEmail}
          ></input>

          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            className="border-2 rounded-lg p-1"
            onChange={getPassword}
          ></input>
        </div>

        <div className="flex flex-row justify-end">
          <button
            className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all my-3"
            onClick={onSubmit}
          >
            Créer un compte
          </button>
        </div>
      </form>
    </div>
  );
}

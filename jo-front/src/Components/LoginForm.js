import React, { useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function LoginForm({ text, userUrl }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const POST_URL = "http://localhost:8080/api/login";
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

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
      console.log(res.data);

      Cookies.set("user-token", res.data.token);
      Cookies.set("user-id", res.data.userId);
      Cookies.set("firstname", res.data.firstname);
      Cookies.set("lastname", res.data.lastname);
      // navigate("/tickets");
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

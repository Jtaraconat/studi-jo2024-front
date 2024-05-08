import React, { useState } from "react";
import Login from "../Components/Login";
import SignIn from "../Components/SignIn";

export default function AuthConn() {
  const [checkedValue, setCheckedvalue] = useState("Se connecter");

  function getValue(e) {
    e.preventDefault();
    setCheckedvalue(e.target.textContent);
  }

  return (
    <div className="flex flex-col my-3">
      <div className="flex flex-row justify-center my-5">
        {checkedValue === "Se connecter" ? (
          <button
            className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
            onClick={(e) => getValue(e)}
          >
            Créer un compte
          </button>
        ) : checkedValue === "Créer un compte" ? (
          <button
            className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
            onClick={(e) => getValue(e)}
          >
            Se connecter
          </button>
        ) : null}
      </div>

      {checkedValue === "" ? null : checkedValue === "Se connecter" ? (
        <Login />
      ) : (
        <SignIn />
      )}
    </div>
  );
}

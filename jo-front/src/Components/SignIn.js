import React from "react";

export default function SignIn() {
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
          ></input>

          <label htmlFor="firstname">Prénom:</label>
          <input
            type="text"
            id="firstname"
            className="border-2 rounded-lg p-1"
          ></input>

          <label htmlFor="telephone">Téléphone:</label>
          <input
            type="text"
            id="telephone"
            className="border-2 rounded-lg p-1"
          ></input>

          <label htmlFor="e-mail">Email:</label>
          <input
            type="text"
            id="e-mail"
            className="border-2 rounded-lg p-1"
          ></input>

          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            className="border-2 rounded-lg p-1"
          ></input>
        </div>

        <div className="flex flex-row justify-end">
          <button className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all my-3">
            Créer un compte
          </button>
        </div>
      </form>
    </div>
  );
}

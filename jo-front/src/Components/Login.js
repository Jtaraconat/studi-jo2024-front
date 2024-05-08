import React from "react";

export default function Login({ text, userUrl }) {
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

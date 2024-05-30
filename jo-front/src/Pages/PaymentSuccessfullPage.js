import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessfullPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 10000);
  }, []);

  return (
    <div className="grid grid-cols-12 my-8">
      <h1 className="col-span-12 text-center text-2xl">
        Paiement effectué avec succès!
      </h1>
      <p className="col-span-12 text-center text-xl my-2">
        Vous allez être redirigé automatiquement. Si ce n'est pas le cas d'ici
        10 secondes, veuillez cliquer{" "}
        <a href="/" className="underline">
          ici
        </a>
      </p>
    </div>
  );
}

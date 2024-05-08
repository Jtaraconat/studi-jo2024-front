import React from "react";
import TicketCard from "../Cards/TicketCard";
import TicketFilter from "../Components/TicketFilter";

export default function Tickets() {
  return (
    <div className="my-5">
      <div className="my-3">
        <h2 className="text-5xl text-center">Découvrez nos offres</h2>
      </div>
      <TicketFilter />
      <TicketCard />
    </div>
  );
}

import React from "react";

export default function InactiveButton({ getValue, text }) {
  return (
    <button
      className=" col-span-6 border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
      onClick={getValue}
    >
      {text}
    </button>
  );
}

import React from "react";

export default function ActiveButton({ getValue, text }) {
  return (
    <button
      className="col-span-6 border-2 border-joblue rounded-full p-3 bg-joblue text-white transition-all"
      onClick={getValue}
    >
      {text}
    </button>
  );
}

import React, { useState } from "react";

export default function SportCard({ image, name, description }) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <div className="col-span-3 my-3 border rounded-xl p-3 shadow-xl">
      <div className="rounded-lg">
        <img src={image} alt="sport" />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold uppercase">{name}</h3>
        {isDetailsVisible ? (
          <div>
            <p className="">{description}</p>
            <button
              onClick={() => setIsDetailsVisible(!isDetailsVisible)}
              className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
            >
              Voir moins
            </button>
          </div>
        ) : (
          <div>
            <p className="line-clamp-3">{description}</p>
            <button
              onClick={() => setIsDetailsVisible(!isDetailsVisible)}
              className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

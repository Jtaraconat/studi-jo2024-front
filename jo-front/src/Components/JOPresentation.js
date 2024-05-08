import React, { useState } from "react";
import sports from "../Assets/sports.png";
import innovation from "../Assets/innovation.png";
import culture from "../Assets/culture.jpg";

export default function JOPresentation() {
  const [isPresentationVisible, setIsPresentationVisible] = useState(false);
  const presentation = (
    <div>
      <div className="my-3 col-span-12 grid grid-cols-12 items-center gap-2">
        <div className="col-span-8">
          <h3 className="text-2xl font-mukta underline decoration-joblue">
            Les sports représentés
          </h3>
          <p>
            Les Jeux de Paris 2024 présenteront une diversité de sports
            captivants, mettant en vedette à la fois les disciplines
            traditionnelles et les nouveaux ajouts passionnants. Des
            compétitions classiques telles que l'athlétisme, la natation, le
            basketball et le football coexisteront avec des sports émergents
            comme l'escalade sportive, le surf et le skateboard, reflétant ainsi
            l'évolution de la culture sportive mondiale.
          </p>
        </div>
        <div className="col-span-4">
          <img src={sports} alt="sports" />
        </div>
      </div>

      <div className="my-3 col-span-12 grid grid-cols-12  items-center gap-2">
        <div className="col-span-4">
          <img src={innovation} alt="innovation" />
        </div>

        <div className="col-span-8">
          <h3 className="text-2xl font-mukta underline decoration-joblue">
            Durabilité et innovation
          </h3>
          <p>
            Les Jeux de Paris 2024 seront également à la pointe de la durabilité
            et de l'innovation. Avec un engagement ferme envers des pratiques
            respectueuses de l'environnement, ces jeux visent à minimiser leur
            empreinte carbone et à promouvoir des modes de vie durables. De
            plus, des technologies de pointe seront intégrées pour offrir une
            expérience spectaculaire aux athlètes et aux spectateurs, avec des
            innovations telles que la réalité virtuelle, la réalité augmentée et
            la diffusion en 8K.
          </p>
        </div>
      </div>

      <div className="my-3 col-span-12 grid grid-cols-12  items-center gap-2">
        <div className="col-span-8">
          <h3 className="text-2xl font-mukta underline decoration-joblue">
            Culture et Héritage
          </h3>
          <p>
            Au-delà des compétitions sportives, les Jeux de Paris 2024 seront
            une célébration de la diversité culturelle et de l'héritage
            artistique de la France. Des événements culturels, des expositions
            artistiques et des performances musicales viendront enrichir
            l'expérience olympique, offrant aux visiteurs une immersion totale
            dans la riche histoire et la vibrante scène culturelle de Paris.
          </p>
        </div>

        <div className="col-span-4">
          <img src={culture} alt="culture" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-span-12 grid grid-cols-12 p-3 rounded-lg gap-3">
      <div className="col-span-12 mb-5">
        <div className="mb-5">
          <h2 className="text-5xl font-bold text-center text-joblue font-mukta">
            Les Jeux Olympiques de Paris 2024
          </h2>
          <h2 className="text-5xl font-bold text-center text-joblue mb-5 font-mukta">
            Une Célébration Mondiale du Sport
          </h2>
          <p className="font-bold text-center">
            Les Jeux Olympiques de Paris 2024 représentent l'apothéose de
            l'esprit sportif, de la compétition de haut niveau et de la
            camaraderie internationale. Prévus pour se dérouler dans la
            magnifique ville de Paris, ces jeux promettent d'être une
            célébration inoubliable de l'athlétisme, de la culture et de l'unité
            mondiale.
          </p>
        </div>

        {isPresentationVisible ? (
          <div className="flex flex-col items-center">
            {presentation}
            <button
              onClick={() => setIsPresentationVisible(!isPresentationVisible)}
              className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
            >
              En voir moins
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsPresentationVisible(!isPresentationVisible)}
              className="border-2 border-joblue rounded-full p-3 hover:bg-joblue hover:text-white transition-all"
            >
              En savoir plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* */
}

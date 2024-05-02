import React from "react";
import HeroBanner from "../Components/HeroBanner";
import SportCard from "../Cards/SportCard";
import JOPresentation from "../Components/JOPresentation";
import basket from "../Assets/basketball.png";
import football from "../Assets/football.png";
import rugby from "../Assets/rugby7.png";
import handball from "../Assets/handball.png";
import CeremonyCard from "../Cards/CeremonyCard";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="p-2 grid grid-cols-12">
        <div className="col-span-12 my-3 shadow-lg rounded-lg">
          <JOPresentation />
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3 my-3">
          <h2 className="col-span-12 text-5xl font-bold text-center font-mukta">
            Découvrez les épreuves
          </h2>
          <SportCard
            image={basket}
            name={"Basketball"}
            description={
              "Ce sport très populaire des Jeux regroupe les douze meilleures équipes nationales féminines et masculines du monde. C'est à Berlin en 1936 que le basket masculin fait son entrée au programme des Jeux, alors que les femmes devront attendre 1976 et les Jeux de Montréal."
            }
          />
          <SportCard
            image={football}
            name={"Football"}
            description={
              "Pour les Jeux de Paris 2024, les matchs seront organisés dans sept des plus grands stades de l’hexagone, à Paris (Parc des Princes), Nantes (Stade de la Beaujoire), Bordeaux (Stade de Bordeaux), Marseille (Stade de Marseille), Nice (Stade de Nice), Saint Étienne (Stade Geoffroy-Guichard) et Lyon (Stade de Lyon)."
            }
          />
          <SportCard
            image={handball}
            name={"Handball"}
            description={
              "Sport ancré en Europe, seuls deux titres olympiques dans l’histoire du handball ont échappé aux nations européennes, quand la Corée du Sud remportait deux fois de suite le tournoi féminin en 1988 et en 1992. Après un doublé en argent historique à Rio, la France a marqué l’histoire à Tokyo en décrochant l’or dans les tournois masculin et féminin."
            }
          />
          <SportCard
            image={rugby}
            name={"Rugby à 7"}
            description={
              " Avec sept joueurs sur le terrain et des rencontres de quatorze minutes seulement (deux mi-temps de 7 minutes chacune) le jeu est rapide et intense. En 2024, 24 équipes feront le déplacement pour les Jeux de Paris : douze équipes masculines et douze équipes féminines. Le rugby se déroulera en deux périodes de trois journées : trois jours pour le tournoi hommes, trois jours pour le tournoi femmes. La première journée est consacrée à deux matchs de poule, la deuxième journée à un match de poule et aux quarts de finales, la troisième journée aux matchs de classement, demi-finales et finale."
            }
          />

          <div className="col-span-12 my-3">
            <CeremonyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import facebook from "../Assets/RS/facebook-full.png";
import instagram from "../Assets/RS/instagram-full.png";
import twitter from "../Assets/RS/twitter-full.png";
import tiktok from "../Assets/RS/tiktok-full.png";
import youtube from "../Assets/RS/youtube-full.png";
import linkedin from "../Assets/RS/linkedin-full.png";

export default function FollowUs() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2  items-center p-3">
      <div className="col-span-4 text-2xl font-bold text-center">
        Suivez-nous sur vos réseaux sociaux préférés
      </div>
      <div className="col-span-8 grid grid-cols-6 grid-rows-2 gap-2">
        <a
          href="https://www.facebook.com/Paris2024"
          className="col-start-2 flex justify-center"
        >
          <img src={facebook} alt="facebook" className="size-16" />
        </a>
        <a
          href="https://www.instagram.com/paris2024/"
          className="col-start-3 flex justify-center"
        >
          <img src={instagram} alt="facebook" className="size-16" />
        </a>
        <a
          href="https://twitter.com/Paris2024"
          className="col-start-4 flex justify-center"
        >
          <img src={twitter} alt="facebook" className="size-16" />
        </a>
        <a
          href="https://www.tiktok.com/@paris2024officiel"
          className="col-start-5 flex justify-center"
        >
          <img src={tiktok} alt="facebook" className="size-16" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCg4W1uf-i5X1nVaeWJsKuyA"
          className="row-start-2 col-start-3 flex justify-center"
        >
          <img src={youtube} alt="facebook" className="size-16 " />
        </a>
        <a
          href="https://www.linkedin.com/company/paris-2024-olympic-and-paralympic-games-bid/mycompany/verification/"
          className="row-start-2 col-start-4 flex justify-center"
        >
          <img src={linkedin} alt="facebook" className="size-16" />
        </a>
      </div>
    </div>
  );
}

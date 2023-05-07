import { useEffect, useState } from "react";
import * as RDialog from "@radix-ui/react-dialog";

import mainLogo from "./assets/logo_nlw-esports.svg";
import "./styles/main.css";

import { GameProps } from "./@types";
import CreateAdBanner from "./components/CreateAdBanner";
import CreateAdDialog from "./components/CreateAdDialog";
import { GameCard } from "./components/GameCard";

const App = () => {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((games) => setGames(games))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={mainLogo} alt="eSports - NLW" className="mb-16" />

      <h1 className="text-white font-black text-6xl mb-16">
        Seu{" "}
        <span className="bg-primaryGradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mb-8">
        {games.map(({ banner, title, ads }, index) => (
          <GameCard key={`${title}-${index}`} {...{ banner, title, ads }} />
        ))}
      </div>
      <RDialog.Root>
        <CreateAdBanner />
        <CreateAdDialog games={games} />
      </RDialog.Root>
    </section>
  );
};

export default App;

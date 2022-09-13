import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
import mainLogo from "./assets/logo_nlw-esports.svg";

const App = () => (
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
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-1.png" />
        <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
          <h1 className="text-white font-bold block">League of Legends</h1>
          <p className="text-zinc-400 text-sm block mt-1">4 anúncios</p>
        </article>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-2.png" />
        <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
          <h1 className="text-white font-bold block">Dota 2</h1>
          <p className="text-zinc-400 text-sm block mt-1">4 anúncios</p>
        </article>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-3.png" />
        <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
          <h1 className="text-white font-bold block">Counter Strike</h1>
          <p className="text-zinc-400 text-sm block mt-1">4 anúncios</p>
        </article>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-5.png" />
        <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
          <h1 className="text-white font-bold block">Apex Legends</h1>
          <p className="text-zinc-400 text-sm block mt-1">4 anúncios</p>
        </article>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-6.png" />
        <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
          <h1 className="text-white font-bold block">Fortnite</h1>
          <p className="text-zinc-400 text-sm block mt-1">4 anúncios</p>
        </article>
      </a>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-7.png" />
        <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
          <h1 className="text-white font-bold block">World of Warcraft</h1>
          <p className="text-zinc-400 text-sm block mt-1">4 anúncios</p>
        </article>
      </a>
    </div>

    <div className="bg-primaryGradient self-stretch rounded-lg overflow-hidden pt-2">
      <div className="bg-[#2A2634] flex justify-between items-center px-8 py-6">
        <div>
          <h2 className="text-white font-black text-2xl block">
            Não encontrou seu duo?
          </h2>
          <p className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </p>
        </div>
        <button className="bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3 py-3 px-4">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  </section>
);

export default App;

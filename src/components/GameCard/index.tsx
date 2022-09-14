import { GameProps } from "../../@types";

export const GameCard = ({ banner, title, ads }: GameProps) => (
  <a href="" className="relative rounded-lg overflow-hidden">
    <img src={banner} />
    <article className="bg-shadowGradient w-full pt-16 pb-4 px-4 absolute inset-x-0 bottom-0">
      <h1 className="text-white font-bold block">{title}</h1>
      <p className="text-zinc-400 text-sm block mt-1">{ads} anúncios</p>
    </article>
  </a>
);

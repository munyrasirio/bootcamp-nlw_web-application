import { MagnifyingGlassPlus } from "phosphor-react";

export const CreateAdBanner = () => (
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
);

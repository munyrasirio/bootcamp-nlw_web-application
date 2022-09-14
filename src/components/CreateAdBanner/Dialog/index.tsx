import * as RDialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "../../Form/Input";

export const Dialog = () => (
  <RDialog.Portal>
    <RDialog.Overlay className="bg-black/60 inset-0 fixed" />
    <RDialog.Content className="bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]">
      <RDialog.Title className="text-3xl font-black">
        Publique um anúncio
      </RDialog.Title>
      <form className="flex flex-col gap-4 mt-8">
        <div className="flex flex-col gap-2">
          <Input
            label="Qual o game?"
            name="game"
            placeholder="Selecione o game que deseja jogar"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            label="Seu nome (ou nickname)"
            name="name"
            placeholder="Como te chamam dentro do game?"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Input
              id="yearsPlaying"
              name="yearsPlaying"
              type="text"
              placeholder="Tudo bem ser ZERO"
              label="Joga há quantos anos?"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              id="discord"
              name="discord"
              type="text"
              placeholder="Usuario#0000"
              label="Qual seu Discord?"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="weekDays">Quando costuma jogar?</label>
            <div className="grid grid-cols-5 items-center gap-1">
              <button title="Domingo" className="bg-zinc-900 w-8 h-8 rounded">
                D
              </button>
              <button
                title="Segunda-feira"
                className="bg-zinc-900 w-8 h-8 rounded"
              >
                S
              </button>
              <button
                title="Terça-feira"
                className="bg-zinc-900 w-8 h-8 rounded"
              >
                T
              </button>
              <button
                title="Quarta-feira"
                className="bg-zinc-900 w-8 h-8 rounded"
              >
                Q
              </button>
              <button
                title="Quinta-feira"
                className="bg-zinc-900 w-8 h-8 rounded"
              >
                Q
              </button>
              <button
                title="Sexta-feira"
                className="bg-zinc-900 w-8 h-8 rounded"
              >
                S
              </button>
              <button title="Sábado" className="bg-zinc-900 w-8 h-8 rounded">
                S
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="hourStart">Qual horário do dia?</label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                id="hourStart"
                name="hourStart"
                type="time"
                placeholder="De"
              />
              <Input
                id="hourEnd"
                name="hourEnd"
                type="time"
                placeholder="Até"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-sm mt-2">
          <Input id="discord" name="discord" type="checkbox" />
          <label htmlFor="discord">Costumo me conectar ao chat de voz</label>
        </div>
        <footer className="flex justify-end gap-4 mt-4">
          <RDialog.Close
            type="button"
            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
          >
            Cancelar
          </RDialog.Close>
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-600 flex items-center gap-3 px-5 h-12 rounded-md font-semibold"
          >
            <GameController size={24} /> Encontrar duo
          </button>
        </footer>
      </form>
    </RDialog.Content>
  </RDialog.Portal>
);

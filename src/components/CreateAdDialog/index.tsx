import * as RCheckbox from "@radix-ui/react-checkbox";
import * as RDialog from "@radix-ui/react-dialog";
import * as RSelect from "@radix-ui/react-select";
import * as RToggleGroup from "@radix-ui/react-toggle-group";
import { CaretDown, Check, GameController } from "phosphor-react";
import { useState } from "react";
import { ICreateAdDialog } from "../../@types";
import { weekDays } from "../../utils/variables";
import { Input } from "../Form/Input";
import SelectItem from "../Form/SelectItem";
import { ISelectItem } from "../../@types";

const CreateAdDialog = ({ games }: ICreateAdDialog) => {
  const [selectedWeekDays, setSelectedWeekDays] = useState<string[]>([]);

  const setBGWhenSelected = (value: string) =>
    selectedWeekDays.includes(value) ? "bg-violet-500" : "bg-zinc-900";

  return (
    <RDialog.Portal>
      <RDialog.Overlay className="bg-black/60 inset-0 fixed" />
      <RDialog.Content className="bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]">
        <RDialog.Title className="text-3xl font-black">
          Publique um anúncio
        </RDialog.Title>
        <form className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-2">
            <RSelect.Root>
              <label htmlFor="select__game" className="font-semibold">
                Qual o game?
              </label>
              <RSelect.Trigger
                className="flex justify-between items-center bg-zinc-900 py-3 px-4 rounded text-small "
                aria-label="Qual o game?"
                id="select__game"
              >
                <RSelect.Value
                  className="text-zinc-500"
                  placeholder="Selecione o game que deseja jogar"
                />
                <RSelect.Icon>
                  <CaretDown className="w-6 h-6 text-zinc-400" />
                </RSelect.Icon>
              </RSelect.Trigger>
              <RSelect.Portal>
                <RSelect.Content className="bg-zinc-900 p-3 rounded text-white">
                  <RSelect.ScrollUpButton></RSelect.ScrollUpButton>
                  <RSelect.Viewport>
                    <RSelect.Group>
                      <RSelect.Label className="text-zinc-500">
                        Selecione o game que deseja jogar
                      </RSelect.Label>
                      {games.map(({ title, id }: ISelectItem) => (
                        <SelectItem
                          key={`select__${title}-${id}`}
                          {...{ title, id }}
                        />
                      ))}
                    </RSelect.Group>
                  </RSelect.Viewport>
                  <RSelect.ScrollDownButton className="RSelectScrollButton"></RSelect.ScrollDownButton>
                </RSelect.Content>
              </RSelect.Portal>
            </RSelect.Root>
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
              <RToggleGroup.Root
                type="multiple"
                className="grid grid-cols-5 items-center gap-1"
                value={selectedWeekDays}
                onValueChange={setSelectedWeekDays}
              >
                {weekDays.map(({ value, title, acronym }) => (
                  <RToggleGroup.Item
                    key={`toggle-item__${value}`}
                    className={`w-8 h-8 rounded ${setBGWhenSelected(value)}`}
                    {...{ value, title }}
                  >
                    {acronym}
                  </RToggleGroup.Item>
                ))}
              </RToggleGroup.Root>
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
          <div className="flex gap-2 text-sm mt-2 items-center">
            <RCheckbox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              id="checkbox__discord"
            >
              <RCheckbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </RCheckbox.Indicator>
            </RCheckbox.Root>
            <label className="cursor-pointer" htmlFor="checkbox__discord">
              Costumo me conectar ao chat de voz
            </label>
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
};

export default CreateAdDialog;

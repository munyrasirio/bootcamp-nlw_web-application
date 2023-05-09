import { InputHTMLAttributes } from "react";

export interface GameProps {
  banner: string;
  title: string;
  id: string;
  ads: number;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface ICreateAdDialog {
  games: Array<GameProps>;
}

export interface ISelectItem {
  title: string;
  id: string;
}

export interface IAd {
  discord: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: number[];
  yearsPlaying: number;
}

export type TAdFormData = Omit<IAd, "weekDays" | "yearsPlaying"> & {
  weekDays: string[];
  yearsPlaying: string;
};

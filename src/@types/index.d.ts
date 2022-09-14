import { InputHTMLAttributes } from "react";

export interface GameProps {
  banner: string;
  title: string;
  ads: number;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

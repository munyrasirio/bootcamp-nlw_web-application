import { IAd, TAdFormData } from "../@types";

export const parseAdData = (data: TAdFormData): IAd => ({
  ...data,
  yearsPlaying: Number(data.yearsPlaying),
  weekDays: data.weekDays.map(Number),
});

import * as RSelect from "@radix-ui/react-select";
import { Check } from "phosphor-react";
import { ISelectItem } from "../../@types";

const SelectItem = ({ title, id }: ISelectItem) => (
  <RSelect.Item value={id} className="relative py-1 pl-6 cursor-pointer">
    <RSelect.ItemIndicator className="absolute inset-0 py-2 text-violet-500">
      <Check />
    </RSelect.ItemIndicator>
    <RSelect.ItemText>{title}</RSelect.ItemText>
  </RSelect.Item>
);

export default SelectItem;

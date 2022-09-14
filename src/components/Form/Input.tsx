import { InputProps } from "../../@types";

export const Input = (props: InputProps) => (
  <>
    {props.label && (
      <label htmlFor={props.name} className="font-semibold">
        {props.label}
      </label>
    )}
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-small placeholder:text-zinc-500"
      {...props}
    />
  </>
);

import { InputType } from "@/lib/types";
import React from "react";



const InlineInput = ({
  label,
  onChange,
  value,
  type,
  required,
  placeholder,
}: InputType) => {
  return (
    <label className="flex flex-col items-start w-full text-blanc">
      {label}
      <input
        className="
            mt-1
            block
            w-full
            px-3
            py-2
            bg-input
            text-noir
            rounded-md
            shadow-sm
            placeholder-slate-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-secondary
            disabled:bg-gris
            disabled:text-input
            disabled:border-slate-200
            disabled:shadow-none
            invalid:border-error
            invalid:text-noir
            focus:invalid:border-pink-500
            focus:invalid:ring-pink-500
            "
        required={required}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type === "password" ? (
        <p className="invisible peer-invalid:visible">{messageError}</p>
      ) : null}
    </label>
  );
};

export default InlineInput;

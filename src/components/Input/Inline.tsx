import { InputProps } from "@/lib/types";
import React from "react";



const InlineInput = ({
  type,
  label,
  value,
  name,
  required,
  placeholder,
  error,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <label 
      className="flex flex-col items-start w-full text-text-light dark:text-texte-dark"
      htmlFor={name}
    >
      {label}
      <input
        className="
            border-0
            focus:ring-1
            focus:focus-primary-light
            error:bg-error
            rounded-lg
            mt-1
            block
            w-full
            px-3
            py-2
            bg-background-light
            dark:bg-foreground-light
            text-texte-light
            font-bold
            "
          type={type}
          id={label}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
      />
      {error && <p className="error">Nécessaire</p>}
    </label>
  );
};

export default InlineInput;
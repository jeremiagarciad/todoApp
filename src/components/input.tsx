import React from "react";
import { InputInterface } from "@interfaces/input_interface";

const Input: React.FC<InputInterface> = ({
  type,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

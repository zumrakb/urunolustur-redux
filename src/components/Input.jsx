import React from "react";

const Input = ({ value, placeholder, type, id, name, onChange }) => {
  return (
    <input
      className="h-10 w-full border rounded-md p-2 outline-none mt-3"
      value={value}
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;

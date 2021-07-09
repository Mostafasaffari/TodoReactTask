import React from "react";

import "./textInput.style.scss";

interface IProps {
  className?: string;
  value?: string;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput: React.FC<IProps> = ({ id, className, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      id={id}
      onChange={onChange}
      className={className}
    />
  );
};

export { TextInput };

import React from "react";

import "./textInput.style.scss";

interface IProps {
  className?: string;
  value?: string;
  defaultValue?: string;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput: React.FC<IProps> = ({
  id,
  className,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value || defaultValue}
      id={id}
      onChange={onChange}
      className={className}
    />
  );
};

export { TextInput };

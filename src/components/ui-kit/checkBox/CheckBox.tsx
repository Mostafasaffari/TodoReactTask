import React from "react";

interface IProps {
  id?: string;
  className?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox: React.FC<IProps> = ({ className, id, checked, onChange }) => {
  return (
    <input
      id={id}
      className={className}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export { CheckBox };

import React from "react";

interface IProps {
  id?: string;
  className?: string;
  checked?: boolean;
}
const CheckBox: React.FC<IProps> = ({ className, id }) => {
  return <input id={id} className={className} type="checkbox" />;
};

export { CheckBox };

import React from "react";

interface IProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button: React.FC<IProps> = ({ className, children, id, onClick }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };

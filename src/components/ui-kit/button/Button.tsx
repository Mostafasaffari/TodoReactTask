import React from "react";

interface IProps {
  id?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button: React.FC<IProps> = ({
  className,
  children,
  id,
  onClick,
  type,
}) => {
  return (
    <button id={id} className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export { Button };

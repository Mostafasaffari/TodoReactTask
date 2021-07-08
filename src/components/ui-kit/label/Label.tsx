import React from "react";

interface IProps {
  id?: string;
  className?: string;
  htmlFor?: string;
  children: React.ReactNode;
}
const Label: React.FC<IProps> = ({ className, children, id, htmlFor }) => {
  return (
    <label id={id} className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export { Label };

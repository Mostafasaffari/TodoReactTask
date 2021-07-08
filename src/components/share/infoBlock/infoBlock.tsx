import React from "react";

export type InfoBlockType = "error" | "success";

interface IProps {
  type: InfoBlockType;
  message: string;
}
const InfoBlock: React.FC<IProps> = ({ message, type }) => {
  return <div className={["block-container", type].join(" ")}>{message}</div>;
};
export { InfoBlock };

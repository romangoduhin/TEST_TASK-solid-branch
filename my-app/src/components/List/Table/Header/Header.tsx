import React from "react";
import { Row } from "../Row";
import { IHeaderProps } from "./Header.types";

export const Header: React.FC<IHeaderProps> = ({ titles }) => {
  return (
    <Row data={titles}/>
  );
};

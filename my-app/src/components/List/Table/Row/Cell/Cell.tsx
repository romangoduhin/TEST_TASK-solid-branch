import React from "react";
import { ICellProps } from "./Cell.types";

export const Cell: React.FC<ICellProps> = ({ width, children }) => {
  return (
    <div className={`${width} h-full flex-centred`}>{children}</div>
  );
};


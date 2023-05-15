import React from "react";
import { IRowProps } from "./Row.types";
import { Cell } from "./Cell";

const widthVariants = {
  1: "w-full",
  2: "w-1/2",
  3: "w-1/3",
  4: "w-1/4",
  5: "w-1/5",
  6: "w-1/6",
  7: "w-1/7",
  8: "w-1/8",
};

export const Row: React.FC<IRowProps> = ({ className, data }) => {
  const columnsCount = 2;
  const cellWidth = widthVariants[columnsCount];

  return (
    <div className={`${className} w-full h-[10%] flex flex-row border-[1px] bg-white hover:bg-gray-light`}>
      {data.map(el => <Cell width={cellWidth} key={el}>{el}</Cell>)}
    </div>
  );
};


import React from "react";
import { IRowProps } from "./Row.types";
import { Cell } from "./Cell";

enum widthByCount {
  "w-full" = 1,
  "w-1/2",
  "w-1/3",
  "w-1/4",
  "w-1/6",
  "w-1/7",
  "w-1/8",
  "w-1/9",
}

export const Row: React.FC<IRowProps> = ({ className, data }) => {
  const columnsCount = 2;
  const cellWidth = widthByCount[columnsCount];

  return (
    <div className={`${className} w-full h-[10%] flex flex-row border-[1px] bg-white hover:bg-gray-light`}>
      {data.map(el => <Cell width={cellWidth} key={el}>{el}</Cell>)}
    </div>
  );
};


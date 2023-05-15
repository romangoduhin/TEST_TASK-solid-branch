import React from "react";
import { useData } from "../../../App.hooks";
import { ITableProps } from "./Table.types";
import { operations } from "../../../App.helpers";
import { Row } from "./Row";
import { Header } from "./Header";

export const Table: React.FC<ITableProps> = ({ operationId }) => {
  const operationType = operations[operationId];

  const { data } = useData(operationType);

  return (
    <div className="w-full h-[90%] border-[1px] overflow-auto bg-white;">
      <Header titles={["Name", "Amount"]}/>

      {data.map(el => (
          <Row key={el._id} data={[el.name.first, el.amount]}/>
        )
      )}
    </div>
  );
};

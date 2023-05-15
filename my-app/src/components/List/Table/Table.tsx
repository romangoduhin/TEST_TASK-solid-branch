import React from "react";
import styles from "./Table.module.scss";
import { useData } from "../../../App.hooks";
import { ITableProps } from "./Table.types";
import { operations } from "../../../App.helpers";
import { Row } from "./Row";
import { Header } from "./Header";

export const Table: React.FC<ITableProps> = ({ operationId }) => {
  const operationType = operations[operationId];

  const { data } = useData(operationType);

  return (
    <div className={styles.table}>
      <Header titles={["Name", "Amount"]}/>
      {data.map(el => (
          <Row data={[el.name.first, el.amount]}/>
        )
      )}
    </div>
  );
};

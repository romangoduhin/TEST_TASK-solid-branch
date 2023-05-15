import React from "react";
import styles from "./List.module.scss";
import { Tabs } from "./Tabs";
import { Table } from "./Table";
import { useQuery } from "../../App.hooks";
import { EmptyContent } from "../EmptyContent";

export const List: React.FC = () => {
  const tabNumber = useQuery("tab");
  const operationId = tabNumber && +tabNumber;

  const isOperationId = typeof operationId === "number" && operationId <= 3 && operationId >= 0;

  if (!isOperationId) return <EmptyContent/>;

  return (
    <div className={styles.list}>
      <Tabs operationId={operationId}/>
      <Table operationId={operationId}/>
    </div>
  );
};

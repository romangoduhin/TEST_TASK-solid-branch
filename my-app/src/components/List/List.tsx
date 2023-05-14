import React from 'react';
import styles from "./List.module.scss";
import { Tabs } from "./Tabs";
import { Table } from "./Table";
import { useQuery } from "../../App.hooks";

export const List: React.FC = () => {
  const operationId = useQuery("tab");

  if (!operationId) return <div>Nothing to show</div>;

  return (
    <div className={styles.list}>
      <Tabs operationId={operationId}/>
      <Table operationId={operationId}/>
    </div>
  );
};

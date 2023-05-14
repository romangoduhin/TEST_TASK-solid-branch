import React from 'react';
import styles from "./List.module.scss";
import { Tabs } from "./Tabs";
import { Table } from "./Table";

export const List: React.FC = () => {
  return (
    <div className={styles.list}>
      <Tabs/>
      <Table/>
    </div>
  );
};

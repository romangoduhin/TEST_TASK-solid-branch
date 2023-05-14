import React from 'react';
import styles from "./Row.module.scss";
import { IRowProps } from "./Row.types";
import { Cell } from "./Cell";

export const Row: React.FC<IRowProps> = ({ data }) => {
  return (
    <div className={styles.row}>
      {data.map(el => <Cell>{el}</Cell>)}
    </div>
  );
};


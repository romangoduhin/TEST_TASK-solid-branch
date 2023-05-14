import React from 'react';
import styles from "./Cell.module.scss";
import { ICellProps } from "../Row";

export const Cell: React.FC<ICellProps> = ({ children }) => {
  return <div className={styles.cell}>{children}</div>;
};


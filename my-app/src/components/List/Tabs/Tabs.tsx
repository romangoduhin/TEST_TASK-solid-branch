import React from 'react';
import styles from "./Tabs.module.scss";
import { Tab } from "./Tab";
import { ITab } from "./Tabs.types";

const tabs: ITab[] = [
  "Income",
  "Outcome",
  "Loans",
  "Investments",
];

export const Tabs: React.FC = () => {
  return (
    <div className={styles.tabs}>
      {tabs.map(tab => (
        <Tab>{tab}</Tab>
      ))}
    </div>
  );
};

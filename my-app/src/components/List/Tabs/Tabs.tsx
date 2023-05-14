import React from 'react';
import styles from "./Tabs.module.scss";
import { Tab } from "./Tab";
import { ITabsProps } from "./Tabs.types";
import { operations } from "../../../App.helpers";

export const Tabs: React.FC<ITabsProps> = ({ operationId }) => {
  return (
    <div className={styles.tabs}>
      {operations.map(operation => {
          const operationIndex = String(operations.indexOf(operation));
          const isActive = operationId === operationIndex;

          return <Tab key={operation} operationId={operationIndex} isActive={isActive}>{operation}</Tab>;
        }
      )}
    </div>
  );
};

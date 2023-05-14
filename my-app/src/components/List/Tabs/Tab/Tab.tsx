import React from 'react';
import styles from "./Tabs.module.scss";
import { ITabProps } from "./Tab.types";

export const Tab: React.FC<ITabProps> = ({ children }) => {
  return (
    <div className={styles.tab}>
      {children}
    </div>
  );
};

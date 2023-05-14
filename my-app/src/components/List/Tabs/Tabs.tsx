import React from 'react';
import styles from "./Tabs.module.scss";
import { Tab } from "./Tab";
import { useQuery } from "../../../App.hooks";
import { ITab, ITabIndex } from "@globalTypes";

const tabs: ITab[] = [
  "income",
  "outcome",
  "loans",
  "investments",
];

export const Tabs: React.FC = () => {
  const tabNumber = useQuery("tab");

  return (
    <div className={styles.tabs}>
      {tabs.map(tab => {
          const tabIndex = tabs.indexOf(tab);
          const isActive = tabNumber ? +tabNumber === tabIndex : false;

          return <Tab key={tab} number={tabIndex as ITabIndex} isActive={isActive}>{tab}</Tab>;
        }
      )}
    </div>
  );
};

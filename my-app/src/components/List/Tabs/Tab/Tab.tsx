import React from 'react';
import styles from "./Tab.module.scss";
import { ITabProps } from "./Tab.types";
import { Link } from "react-router-dom";

export const Tab: React.FC<ITabProps> = ({ number, children, isActive }) => {
  return (
    <div className={isActive ? `${styles.tab} ${styles.active}` : styles.tab}>
      <Link to={`/navigator?tab=${number}`}>
        {children}
      </Link>
    </div>
  );
};

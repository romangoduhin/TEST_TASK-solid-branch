import React from "react";
import styles from "./EmptyContent.module.scss";

export const EmptyContent: React.FC = () => {
  return (
    <div className={styles.emptyContent}>Nothing to show</div>
  );
};

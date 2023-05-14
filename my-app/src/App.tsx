import React from 'react';
import styles from "./App.module.scss";
import { List } from "./components/List";

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <List/>
    </div>
  );
};


export default App;

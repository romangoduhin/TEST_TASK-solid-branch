import React from "react";
import styles from "./App.module.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { List } from "./components/List";
import { IOperationId } from "@globalTypes";

const DEFAULT_TAB_NUMBER: IOperationId = 0;

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/navigator" element={<List/>}/>
        <Route
          path="*"
          element={<Navigate to={`/navigator?tab=${DEFAULT_TAB_NUMBER}`} replace/>}
        />
      </Routes>
    </div>
  );
};


export default App;

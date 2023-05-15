import React from "react";
import { Tab } from "./Tab";
import { ITabsProps } from "./Tabs.types";
import { operations } from "../../../App.helpers";

export const Tabs: React.FC<ITabsProps> = ({ operationId }) => {
  return (
    <div className="w-full h-[10%] flex flex-row">
      {operations.map(operation => {
          const operationIndex = operations.indexOf(operation);
          const isActive = operationId === operationIndex;

          return <Tab key={operation} operationId={operationIndex} isActive={isActive}>
            {operation}
          </Tab>;
        }
      )}
    </div>
  );
};

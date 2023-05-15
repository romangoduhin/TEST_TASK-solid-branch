import React from "react";
import { Tabs } from "./Tabs";
import { Table } from "./Table";
import { useQuery } from "../../App.hooks";
import { EmptyContent } from "../EmptyContent";

export const List: React.FC = () => {
  const tabNumber = useQuery("tab");
  const operationId = tabNumber && +tabNumber;

  const isOperationId = typeof operationId === "number" && operationId <= 3 && operationId >= 0;

  if (!isOperationId) return <EmptyContent/>;

  return (
    <div className="p-0.5 w-[695px] h-[640px] rounded-lg border-[1px]">
      <Tabs operationId={operationId}/>
      <Table operationId={operationId}/>
    </div>
  );
};

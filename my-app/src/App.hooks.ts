import { useLocation } from "react-router-dom";
import { IData, IDataItem, IOperationType } from "@globalTypes";
import { mockData } from "./data";

export const useQuery = (name: string): string | null => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);

  return searchParams.get(name);
};

export const useData = (type: IOperationType): IData => {
  let { total, data } = mockData;

  data = data.filter((el: IDataItem) => el.type === type);

  return { total, data };
};
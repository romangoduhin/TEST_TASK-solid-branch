import json from "./data.json";
import { IData, IDataItem } from "@globalTypes";
import { getRandomNumber } from "../App.helpers";

// If I understood correctly, we have incorrect field "amount" in json
// which was incorrect created by JSON generator
// that why I update this field value to random number

const newObject = JSON.parse(JSON.stringify(json));

let { total, data } = newObject;

data = data.map((el: IDataItem) => {
    return {
      ...el,
      amount: getRandomNumber(1000)
    };
  }
);

export const mockData = { total, data } as IData;

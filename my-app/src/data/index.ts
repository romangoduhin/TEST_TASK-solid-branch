import json from "./data.json";
import { getRandomNumber } from "../App.helpers";

// if I understood correctly, we have incorrect field "amount" in json
// which was incorrect created by JSON generator
// that why I update this field value to random number

const { total, data: incorrectData } = json;

const updatedData = incorrectData.map(el => {
    return {
      ...el,
      amount: getRandomNumber(1000)
    };
  }
);

export const data = { total, ...updatedData };
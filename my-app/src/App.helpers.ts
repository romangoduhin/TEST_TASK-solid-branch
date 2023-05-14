import { IOperationType } from "@globalTypes";

export const operations: IOperationType[] = [
  "income",
  "outcome",
  "loan",
  "investment"
];

export const getRandomNumber = (range: number): number => {
  return Math.round(Math.random() * range);
};
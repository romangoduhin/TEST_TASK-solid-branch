export type IOperationType = "income" | "outcome" | "loan" | "investment";

export type IOperationId = 0 | 1 | 2 | 3;

export type IDataItem = {
  "_id": string,
  "amount": number,
  "type": IOperationType,
  "name": {
    "first": string,
    "last": string
  },
  "company": string,
  "email": string,
  "phone": string,
  "address": string
}

export type IData = {
  total: number,
  data: IDataItem[]
}
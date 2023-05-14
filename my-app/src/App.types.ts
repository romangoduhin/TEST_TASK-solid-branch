export type ITab = "income" | "outcome" | "loans" | "investments";

export type ITabIndex = 0 | 1 | 2 | 3;

export type IDataItem = {
  "_id": string,
  "amount": number,
  "type": ITab,
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
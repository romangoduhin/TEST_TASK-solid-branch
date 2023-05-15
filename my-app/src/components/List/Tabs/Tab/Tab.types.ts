import { ReactNode } from "react";

export type ITabProps = {
  operationId: number,
  children: ReactNode,
  isActive: boolean
}
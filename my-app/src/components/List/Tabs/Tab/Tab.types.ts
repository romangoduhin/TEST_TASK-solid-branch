import { ReactNode } from "react";

export type ITabProps = {
  operationId: string,
  children: ReactNode,
  isActive: boolean
}
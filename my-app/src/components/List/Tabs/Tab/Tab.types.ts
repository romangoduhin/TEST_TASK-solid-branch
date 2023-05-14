import { ReactNode } from "react";
import { ITabIndex } from "@globalTypes";

export type ITabProps = {
  number: ITabIndex,
  children: ReactNode,
  isActive: boolean
}
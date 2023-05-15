import React from "react";
import { IEmptyContentProps } from "./EmptyContent.types";

export const EmptyContent: React.FC<IEmptyContentProps> = ({ text }) => {
  const DEFAULT_TEXT = "Nothing to show";

  return (
    <div className="text-2xl text-white">{text ? text : DEFAULT_TEXT}</div>
  );
};

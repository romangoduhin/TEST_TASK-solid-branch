import React from "react";
import { ITabProps } from "./Tab.types";
import { NavLink } from "react-router-dom";

export const Tab: React.FC<ITabProps> = ({ operationId, children, isActive }) => {
  const bg = isActive ? "bg-blue" : "bg-white";

  return (
    <div
      className={`w-1/4 h-full rounded-t-lg capitalize border-[1px] cursor-pointer ${bg} hover:bg-gray-light`}>
      <NavLink
        className="w-full h-full flex-centred"
        to={`/navigator?tab=${operationId}`}>
        {children}
      </NavLink>
    </div>
  );
};

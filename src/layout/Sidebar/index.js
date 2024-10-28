import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Squares2X2Icon,
  CogIcon,
  ChartBarSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../hooks/useAuth";
import sidebarData from "./sidebarData.json"; 

const iconMap = {
  Squares2X2Icon: Squares2X2Icon,
  CogIcon: CogIcon,
  ChartBarSquareIcon: ChartBarSquareIcon,
  UserGroupIcon: UserGroupIcon,
};

const Sidebar = ({ isCollapsed }) => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300 bg-gradient-to-br from-[#1434A4] via-[#5D3FD3] to-[#6082B6] text-white h-screen p-4`}
    >
      <div className="flex items-center mb-6">
        <ChartBarSquareIcon className="h-6 w-6 mr-2" />
        {!isCollapsed && <h2 className="text-2xl font-bold">Dashboard UI</h2>}
      </div>
      <nav>
        <ul className="space-y-4">
          {sidebarData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const isActive = location.pathname === item.path;
            const isAuthorized = item.role === "all" || user?.role === item.role;

            if (!isAuthorized) return null;

            return (
              <li
                key={index}
                className={`flex items-center ${
                  isActive ? "border-r-4 border-white font-semibold" : ""
                }`}
              >
                <IconComponent className="h-5 w-5 mr-2" />
                {!isCollapsed && (
                  item.path.startsWith("#") ? (
                    <span className="hover:text-gray-300">{item.label}</span>
                  ) : (
                    <NavLink to={item.path} className="hover:text-gray-300">
                      {item.label}
                    </NavLink>
                  )
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

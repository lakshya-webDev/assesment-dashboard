import React, { useState } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import FileUpload from "../components/FileUpload";
import { useAuth } from "../hooks/useAuth";

const DashboardLayout = ({ children, title }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [toggleFileUpload, setToggleFileUpload] = useState(false);
  const {user} =useAuth()
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <Navbar
          onToggleSidebar={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <header className="flex justify-between items-center p-4 bg-white shadow text-lg font-semibold">
          <div>{title}</div>
          {user && user.role === 'Admin' && 
          <button
            onClick={() => setToggleFileUpload(!toggleFileUpload)}
            className="flex items-center bg-[#5D3FD3] text-white px-3 py-2 rounded hover:bg-blue-600 transition font-medium text-sm"
          >
            <ArrowUpOnSquareIcon className="h-5 w-5 mr-2" />
            Upload
          </button>
          }
        </header>
        <MainContent>
          {toggleFileUpload && <FileUpload />}
          {children}
        </MainContent>
      </div>
    </div>
  );
};

export default DashboardLayout;

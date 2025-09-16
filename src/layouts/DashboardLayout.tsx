import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/menu/qr/dashboard/Header";
import Sidebar from "../components/common/menu/qr/dashboard/Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <Header />
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

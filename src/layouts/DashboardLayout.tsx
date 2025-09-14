import type { FC, ReactNode } from "react";
import Sidebar from "../components/common/menu/qr/dashboard/Sidebar";
import Header from "../components/common/menu/qr/dashboard/Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => (
  <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  </div>
);

export default DashboardLayout;

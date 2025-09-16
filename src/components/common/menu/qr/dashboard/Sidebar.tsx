// src/components/common/menu/qr/dashboard/Sidebar.tsx
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const Sidebar: FC = () => {
  const { pathname } = useLocation();

  const navItems: NavItem[] = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "QR Codes", path: "/dashboard/qr" },
    { label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 text-2xl font-bold text-indigo-600">Restaurant Admin</div>
      <nav className="mt-6 flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-6 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition ${
              pathname === item.path ? "bg-indigo-100 text-indigo-700 font-semibold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Restaurant</span>
        <button className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

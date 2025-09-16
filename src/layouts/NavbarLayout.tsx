import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavbarLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">Digital Menu</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </div>
      </nav>
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarLayout;

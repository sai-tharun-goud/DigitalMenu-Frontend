import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import NavbarLayout from "../layouts/NavbarLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MenuView from "../pages/MenuView";
import RestaurantPage from "../pages/RestaurantPage";
import NotFound from "../pages/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="/menu/:restaurantId/:menuId" element={<MenuView />} />
      </Route>

      {/* Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

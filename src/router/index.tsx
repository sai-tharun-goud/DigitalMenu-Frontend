import { lazy, Suspense } from "react";
import type { FC } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const MenuView = lazy(() => import("../pages/MenuView"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Loader: FC = () => (
  <div className="flex items-center justify-center h-screen">Loading...</div>
);

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/menu/:restaurantId", element: <MenuView /> },
  { path: "*", element: <NotFound /> },
];

const AppRouter: FC = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<Loader />}>{element}</Suspense>;
};

export default AppRouter;

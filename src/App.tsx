import type { FC } from "react";
import AppRouter from "./router";
import Navbar from "./components/Navbar";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AppRouter />
    </div>

  );
};

export default App;

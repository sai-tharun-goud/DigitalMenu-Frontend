import React, { type FC } from "react";
import AppRouter from "./router";
import { MenuProvider } from "./context/MenuContext";

const App: FC = () => (
  <MenuProvider>
    <div className="min-h-screen bg-gray-50">
      <AppRouter />
    </div>
  </MenuProvider>
);

export default App;

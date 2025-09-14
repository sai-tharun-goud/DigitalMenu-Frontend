// src/context/useMenu.ts
import { useContext } from "react";
import { MenuContext, type MenuContextType } from "./MenuContext";

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within MenuProvider");
  return context;
};

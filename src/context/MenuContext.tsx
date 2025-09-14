// src/context/MenuContext.tsx
import { createContext, useState } from "react";
import type { ReactNode } from "react";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export type MenuContextType = {
  items: MenuItem[];
  addItem: (item: MenuItem) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => setItems(prev => [...prev, item]);

  return (
    <MenuContext.Provider value={{ items, addItem }}>
      {children}
    </MenuContext.Provider>
  );
};

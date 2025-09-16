// src/context/MenuContext.tsx
import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

// --- Types ---
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category?: string;
};

export type RestaurantMenuItem = {
  menuId: string;
  menuName: string;
  items: MenuItem[];
};

export type Restaurant = {
  restaurantId: string;
  menus: RestaurantMenuItem[];
};

export type MenuContextType = {
  restaurants: Restaurant[];
  addMenu: (restaurantId: string, menuName: string) => string;
  addItem: (restaurantId: string, menuId: string, item: Omit<MenuItem, "id">) => void;
  removeItem: (restaurantId: string, menuId: string, itemId: string) => void;
  getMenus: (restaurantId: string) => RestaurantMenuItem[];
  getMenuItems: (restaurantId: string, menuId: string) => MenuItem[];
};

// --- Context ---
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// --- Provider ---
export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("restaurants");
    if (stored) {
      try {
        setRestaurants(JSON.parse(stored) as Restaurant[]);
      } catch {
        setRestaurants([]);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  // --- Methods ---
  const addMenu = (restaurantId: string, menuName: string) => {
    const menuId = uuidv4();
    setRestaurants(prev => {
      const restaurantExists = prev.find(r => r.restaurantId === restaurantId);
      if (restaurantExists) {
        return prev.map(r =>
          r.restaurantId === restaurantId
            ? { ...r, menus: [...r.menus, { menuId, menuName, items: [] }] }
            : r
        );
      } else {
        return [...prev, { restaurantId, menus: [{ menuId, menuName, items: [] }] }];
      }
    });
    return menuId;
  };

  const addItem = (restaurantId: string, menuId: string, item: Omit<MenuItem, "id">) => {
    const newItem: MenuItem = { id: uuidv4(), ...item };
    setRestaurants(prev =>
      prev.map(r =>
        r.restaurantId === restaurantId
          ? {
              ...r,
              menus: r.menus.map(m =>
                m.menuId === menuId ? { ...m, items: [...m.items, newItem] } : m
              ),
            }
          : r
      )
    );
  };

  const removeItem = (restaurantId: string, menuId: string, itemId: string) => {
    setRestaurants(prev =>
      prev.map(r =>
        r.restaurantId === restaurantId
          ? {
              ...r,
              menus: r.menus.map(m =>
                m.menuId === menuId ? { ...m, items: m.items.filter(i => i.id !== itemId) } : m
              ),
            }
          : r
      )
    );
  };

  const getMenus = (restaurantId: string): RestaurantMenuItem[] => {
    return restaurants.find(r => r.restaurantId === restaurantId)?.menus ?? [];
  };

  const getMenuItems = (restaurantId: string, menuId: string): MenuItem[] => {
    return (
      restaurants.find(r => r.restaurantId === restaurantId)?.menus.find(m => m.menuId === menuId)?.items ?? []
    );
  };

  return (
    <MenuContext.Provider value={{ restaurants, addMenu, addItem, removeItem, getMenus, getMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

// --- Hook ---
export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};

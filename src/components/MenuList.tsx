// src/components/MenuList.tsx
import type { FC } from "react";
import type { MenuItem } from "../context/MenuContext";

interface MenuListProps {
  items: MenuItem[];
  onDelete?: (id: string) => void;
  currency?: string;
}

const MenuList: FC<MenuListProps> = ({ items, onDelete, currency = "₹" }) => {
  if (items.length === 0) {
    return <p className="text-gray-500 text-center">No menu items available.</p>;
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center bg-white shadow-md p-3 rounded-lg"
        >
          <span className="font-medium">
            {item.name} - {currency}
            {item.price}
          </span>
          {onDelete && (
            <button
              onClick={() => onDelete(item.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;

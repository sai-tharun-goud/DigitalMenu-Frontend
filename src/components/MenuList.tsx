import type { FC } from "react";
import type { MenuItem } from "../context/MenuContext";

interface MenuListProps {
  items: MenuItem[];
}

const MenuList: FC<MenuListProps> = ({ items }) => {
  if (items.length === 0) {
    return <p className="text-gray-500 text-center">No menu items available.</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center border-b pb-2"
        >
          <span className="font-medium">{item.name}</span>
          <span className="text-gray-600">${item.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;

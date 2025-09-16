import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMenu, type RestaurantMenuItem } from "../context/MenuContext";
import MenuList from "../components/MenuList";

const MenuView: React.FC = () => {
  const { restaurantId, menuId } = useParams<{ restaurantId: string; menuId: string }>();
  const { getMenus } = useMenu();
  const [menus, setMenus] = useState<RestaurantMenuItem[]>([]);
  const [selectedMenuId, setSelectedMenuId] = useState(menuId || "");

  useEffect(() => {
    if (!restaurantId) return;
    const allMenus = getMenus(restaurantId);
    setMenus(allMenus);
    if (!selectedMenuId && allMenus.length > 0) setSelectedMenuId(allMenus[0].menuId);
  }, [restaurantId, getMenus, selectedMenuId]);

  const selectedMenu = menus.find(m => m.menuId === selectedMenuId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Restaurant Menu</h1>

      {menus.length > 1 && (
        <div className="mb-6">
          <label className="font-medium mr-4">Choose Menu:</label>
          <select
            value={selectedMenuId}
            onChange={e => setSelectedMenuId(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            {menus.map(m => (
              <option key={m.menuId} value={m.menuId}>
                {m.menuName}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedMenu ? (
        <MenuList items={selectedMenu.items} currency="₹" />
      ) : (
        <p className="text-gray-500">No menu available for this restaurant.</p>
      )}
    </div>
  );
};

export default MenuView;

import React, { useState, useEffect } from "react";
import { useMenu, type RestaurantMenuItem } from "../context/MenuContext";
import MenuList from "../components/MenuList";

const Dashboard: React.FC = () => {
  const { addMenu, addItem, removeItem, getMenus } = useMenu();
  const restaurantId = "demo-123";

  const [menus, setMenus] = useState<RestaurantMenuItem[]>([]);
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [newMenuName, setNewMenuName] = useState("");
  const [dishName, setDishName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const allMenus = getMenus(restaurantId);
    setMenus(allMenus);
    if (allMenus.length > 0 && !selectedMenuId) setSelectedMenuId(allMenus[0].menuId);
  }, [getMenus, restaurantId, selectedMenuId]);

  const handleAddMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMenuName.trim()) return;
    const menuId = addMenu(restaurantId, newMenuName.trim());
    setSelectedMenuId(menuId);
    setNewMenuName("");
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName || !price || !selectedMenuId) return;
    addItem(restaurantId, selectedMenuId, { name: dishName, price: parseFloat(price) });
    setDishName("");
    setPrice("");
  };

  const selectedMenu = menus.find(m => m.menuId === selectedMenuId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <form onSubmit={handleAddMenu} className="mb-6 flex gap-4 flex-wrap items-center">
        <input
          type="text"
          value={newMenuName}
          onChange={e => setNewMenuName(e.target.value)}
          placeholder="New Menu Name"
          className="px-4 py-2 border rounded-lg flex-1"
        />
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Add Menu
        </button>
      </form>

      {menus.length > 0 && (
        <div className="mb-6">
          <label className="font-medium mr-4">Select Menu:</label>
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

      {selectedMenuId && (
        <form onSubmit={handleAddItem} className="mb-6 flex gap-4 flex-wrap items-center">
          <input
            type="text"
            value={dishName}
            onChange={e => setDishName(e.target.value)}
            placeholder="Dish Name"
            className="px-4 py-2 border rounded-lg flex-1"
          />
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Price"
            className="px-4 py-2 border rounded-lg w-32"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Add Item
          </button>
        </form>
      )}

      {selectedMenu ? (
        <MenuList items={selectedMenu.items} onDelete={id => removeItem(restaurantId, selectedMenu.menuId, id)} currency="₹" />
      ) : (
        <p className="text-gray-500">No menus yet. Add a new menu first!</p>
      )}
    </div>
  );
};

export default Dashboard;

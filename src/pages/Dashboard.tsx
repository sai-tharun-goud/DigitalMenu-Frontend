import type { FC, FormEvent } from "react";
import { useState } from "react";
import { useMenu } from "../context/useMenu";
import MenuList from "../components/MenuList";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard: FC = () => {
  const { items, addItem } = useMenu(); // ✅ get menu items and addItem function
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    addItem({ id: Date.now().toString(), name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-center mb-8">
        Restaurant Dashboard
      </h1>

      {/* Add Item Form */}
      <form
        onSubmit={handleAddItem}
        className="flex gap-4 mb-8 justify-center flex-wrap"
      >
        <input
          type="text"
          placeholder="Dish name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-4 py-2 flex-1 min-w-[150px]"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded-lg px-4 py-2 w-32"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </form>

      {/* Menu Items List */}
      <MenuList items={items} />
    </DashboardLayout>
  );
};

export default Dashboard;

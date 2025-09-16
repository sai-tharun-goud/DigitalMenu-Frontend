// src/pages/RestaurantPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const id = restaurantId ?? "demo-123";
  const { restaurants } = useMenu();

  const restaurant = restaurants.find((r) => r.restaurantId === id);

  if (!restaurant) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
        <p>No menus available yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Restaurant {id}</h1>
      <h2 className="text-xl font-semibold mb-4">Available Menus</h2>

      <ul className="space-y-3">
        {restaurant.menus.length > 0 ? (
          restaurant.menus.map((menu) => (
            <li key={menu.menuId}>
              <Link
                to={`/menu/${id}/${menu.menuId}`}
                className="text-blue-600 hover:underline"
              >
                {menu.menuName}
              </Link>
            </li>
          ))
        ) : (
          <p>No menus added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantPage;

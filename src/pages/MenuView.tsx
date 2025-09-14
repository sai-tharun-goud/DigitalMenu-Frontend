import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useMenu } from "../context/useMenu";
import MenuList from "../components/MenuList";

const MenuView: FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { items } = useMenu();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        Menu for Restaurant ID: {restaurantId}
      </h1>

      <MenuList items={items} />
    </div>
  );
};

export default MenuView;

import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };
  return (
    <>
      <button
        className="block md:hidden hover:text-rose-500 focus:outline-none"
        onClick={handleToggleMenu}
      >
        <IoMenu />
      </button>
    </>
  );
};

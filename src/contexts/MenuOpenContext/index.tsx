"use client";

import { createContext, useState } from "react";
import { MenuOpenContextInter } from "./interface";

const initialMenuOpen: MenuOpenContextInter = {
  isMenuOpen: false,
  setMenuOpen: () => {},
};

export const MenuOpenContext =
  createContext<MenuOpenContextInter>(initialMenuOpen);

export const MenuOpenProvider: React.FC<any> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(
    initialMenuOpen.isMenuOpen
  );
  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      {children}
    </MenuOpenContext.Provider>
  );
};

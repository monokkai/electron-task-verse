import { NavItem } from "../interfaces/navItem";
import { create } from "zustand";
import { navItems } from "../items.ts";

export interface NavbarStore {
  activeItem: number;
  hoveredItem: number | null;
  collapsed: boolean;
  setActiveItem: (id: number) => void;
  setHoveredItem: (id: number | null) => void;
  toggleCollapsed: () => void;

  getActiveItem: () => NavItem | undefined;
  getHoveredItem: () => NavItem | undefined;
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  activeItem: 1,
  hoveredItem: null,
  collapsed: false,
  setActiveItem: (id: number) => set({ activeItem: id }),
  setHoveredItem: (id: number | null) => set({ hoveredItem: id }),
  toggleCollapsed: () => set({ activeItem: 1 }),

  getActiveItem: () => navItems.find((item) => item.id == activeItem),
  getHoveredItem: () => navItems.find((item) => item.id == hoveredItem),
}));

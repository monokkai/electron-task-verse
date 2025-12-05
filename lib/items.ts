import {
  FaHome,
  FaCog,
  FaCalendarAlt,
  FaChartBar,
  FaUser,
  FaListUl,
  FaPlusCircle,
  FaFolder,
} from "react-icons/fa";

import { NavItem } from "./interfaces/navItem";

export const navItems: NavItem[] = [
  {
    id: 1,
    label: "Main Page",
    icon: FaHome,
    color: "blue.400",
    isActive: true,
    badge: undefined,
  },
  {
    id: 2,
    label: "Tasks",
    icon: FaListUl,
    color: "green.400",
    badge: undefined,
  },
  { id: 3, label: "Calendar", icon: FaCalendarAlt, color: "purple.400" },
  { id: 4, label: "Analytics", icon: FaChartBar, color: "orange.400" },
  { id: 5, label: "Projects", icon: FaFolder, color: "pink.400" },
  { id: 6, label: "Settings", icon: FaCog, color: "gray.400" },
  { id: 7, label: "Profile", icon: FaUser, color: "teal.400" },
];

export const quickActions = [
  { id: 1, label: "New Task", icon: FaPlusCircle, color: "blue.500" },
  { id: 2, label: "Today", icon: FaCalendarAlt, color: "green.500" },
];

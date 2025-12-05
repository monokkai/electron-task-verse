export interface NavItem {
  id: number;
  label: string;
  icon: React.ElementType;
  color: string;
  isActive?: boolean;
  badge?: number;
}

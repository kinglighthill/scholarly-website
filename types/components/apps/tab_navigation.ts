export interface TabNavigationProps {
  active: string;
  changeTab: (tab: 'android' | 'ios' | 'desktop') => void;
}
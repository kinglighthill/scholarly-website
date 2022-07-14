export interface BuyPinProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SelectedApps {
  [key: string]: string[];
}

export interface SelectAppsProps {
  changeTab: (tab: string) => void;
}
export type BuyPinTabOptions = 'select-apps' | 'cart' | 'pay';

export interface BuyPinTabProps {
  changeTab: (tab: BuyPinTabOptions) => void;
}
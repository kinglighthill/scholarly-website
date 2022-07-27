export interface CartItem {
  name: string;
  image: string;
  price: string;
  count: number;
}

export type CartContextType = [
  CartItem[],
  (value: CartItem[]) => void
]

export interface CartProviderProps {
  children: React.ReactNode;
}
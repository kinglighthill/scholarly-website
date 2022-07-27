import { createContext, useContext, useState } from 'react';
import { CartProviderProps, CartContextType, CartItem } from '../types/context/cart_context';

const CartContext = createContext<CartContextType>([[], (value) => null]);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCart = (value: CartItem[]) => {
    setCart(value);
  }

  return (
    <CartContext.Provider value={[cart, updateCart]}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext);
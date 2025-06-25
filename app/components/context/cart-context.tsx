"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
   quantity?: number; 
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  toastMessage: string | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    setToastMessage("✅ Added to cart");

    // Remove after 2 seconds
    setTimeout(() => setToastMessage(null), 2000);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, toastMessage }}>
      {children}
      {/* Toast Component */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
          {toastMessage}
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

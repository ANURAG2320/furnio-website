"use client";
import React from "react";
import { useCart } from "../components/cart-context";

export default function CartPage() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-1">₹{item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-bold">Total: ₹{totalAmount}</h2>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

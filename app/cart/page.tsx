"use client";

import React from "react";
import { useCart } from "../components/context/cart-context";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-6"
            >
              {/* Product Image */}
              <div className="w-32 h-32 mb-4 md:mb-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={128}
                  height={128}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 px-4 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 mt-3 md:mt-0"
              >
                <Icon icon="mdi:trash-can-outline" width="24" height="24" />
              </button>
            </div>
          ))}

          {/* Total & Clear Cart */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 underline"
            >
              Clear Cart
            </button>

            <div className="text-right">
              <p className="text-lg font-semibold">
                Total: ₹
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
              <button className="mt-3 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
               <Link href="/checkout">Proceed to Checkout</Link> 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

"use client";
import React from "react";
import { useCart } from "../components/context/cart-context"; // Adjust path if different

const products = [
  {
    id: "1",
    name: "Syltherine",
    price: 3499,
    image: "/Images.svg",
  },
  {
    id: "2",
    name: "Wooden Chair 1",
    price: 3499,
    image: "/Images (1).svg",
  },
  {
    id: "3",
    name: "Wooden Chair 2",
    price: 3499,
    image: "/Images (2).svg",
  },
  {
    id: "4",
    name: "Wooden Chair 3",
    price: 3499,
    image: "/Images (3).svg",
  },
  {
    id: "5",
    name: "Wooden Chair 4",
    price: 3499,
    image: "/Images (4).svg",
  },
  {
    id: "6",
    name: "Chair Premium",
    price: 3499,
    image: "/image 7.svg",
  },
  {
    id: "7",
    name: "Classic Chair",
    price: 3499,
    image: "/Images (1).svg",
  },
  {
    id: "8",
    name: "Elegant Chair",
    price: 3499,
    image: "/Images (3).svg",
  },
];

const ProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen px-6 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="text-center shadow-md p-4 rounded-lg border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">Comfortable and stylish chair</p>
            <p className="text-base font-semibold text-black mt-2">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

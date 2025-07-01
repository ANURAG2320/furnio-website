'use client';

import { useCart } from '@/app/components/context/cart-context';

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
        <form className="space-y-5">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="input-style w-1/2" />
            <input type="text" placeholder="Last Name" className="input-style w-1/2" />
          </div>
          <input type="text" placeholder="Company Name (Optional)" className="input-style  w-1/2" />
          
          <input type="text" placeholder="Street address" className="input-style w-1/2" />
          <input type="text" placeholder="Town / City" className="input-style w-1/2" />
          
          <input type="text" placeholder="ZIP code" className="input-style w-1/2" />
          <input type="text" placeholder="Phone" className="input-style" />
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>

          <div className="flex justify-between font-medium mb-2">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{(item.price).toLocaleString()}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-medium mb-2">
            <span>Subtotal</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-yellow-600 mb-6">
            <span>Total</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>

          <div className='flex justify-center items-center font-semibold border-black'>
            <button className='border border-black rounded-lg px-10 py-2 hover:bg-[#B88E2F] hover:text-white hover:border-white'>PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

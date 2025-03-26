import { section } from 'framer-motion/client';
import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
  const { getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <section className="py-38 mx-auto max-w-[480px] px-[37px] sm:max-w-[640px] sm:px-8 md:max-w-[768px] md:px-16 lg:max-w-[1024px] lg:py-30 xl:max-w-[1440px] xl:px-8">
      {/* Cart Table */}
      <div className="shadow-lg rounded-lg overflow-hidden bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-700">
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Products</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Title</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Price</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Quantity</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Total</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr
                    key={e.id}
                    className="border-b last:border-none hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="p-4">
                      <img
                        src={e.image}
                        alt={e.name}
                        height={80}
                        width={80}
                        className="object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="p-4">
                      <div className="text-gray-800 font-medium text-lg">{e.name}</div>
                    </td>
                    <td className="p-4 text-gray-600 font-semibold">₹{e.new_price.toFixed(2)}</td>
                    <td className="p-4 text-gray-600 font-semibold">{cartItems[e.id]}</td>
                    <td className="p-4 text-gray-800 font-semibold">
                    ₹{(e.new_price * cartItems[e.id]).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeFromCart(e.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200 focus:outline-none"
                      >
                        <TbTrash className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>

      {/* Cart Summary */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        {/* Summary Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Summary</h4>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <h4 className="font-medium">Subtotal:</h4>
              <h4 className="font-semibold">₹{getTotalCartAmount()}</h4>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-gray-600">
              <h4 className="font-medium">Shipping Fee:</h4>
              <h4 className="font-semibold text-green-600">Free</h4>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-gray-800">
              <h4 className="font-bold text-lg">Total:</h4>
              <h4 className="font-bold text-lg">₹{getTotalCartAmount()}</h4>
            </div>
          </div>
          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Check Out
          </button>
        </div>

        {/* Coupon Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Apply Coupon</h4>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
import React, { useState, useEffect, useContext } from 'react';
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext' // Ensure correct import

const ProductDisplay = ({ product }) => {
  
  const { addToCart } = useContext(ShopContext); // Ensure ShopContext is wrapped around your app

  if (!product) {
    return <p className="text-center text-red-500">No product data available.</p>;
  }

  const defaultImage = "https://via.placeholder.com/300";
  const defaultSideImages = [defaultImage];

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image || defaultImage);

  useEffect(() => {
    setMainImage(product?.image || defaultImage);
  }, [product?.image]);

  return (
    <section className="p-6 bg-[#fffaea]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 rounded-lg shadow-lg">
        
        {/* Left Side - Product Images */}
        <div className="flex flex-col items-center">
          <div className="flex gap-3 mb-4">
            {(product?.sideimage?.length ? product.sideimage : defaultSideImages).map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index}`} 
                className='h-20 w-20 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition'
                onClick={() => setMainImage(img)} 
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <img src={mainImage} alt={product?.name || "Product Image"} className="max-h-120 object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex flex-col justify-center p-4">
          <h3 className="text-2xl font-semibold text-gray-800">{product?.name || "Unknown Product"}</h3>
          <div className="flex items-center mt-2 space-x-1 text-yellow-500">
            {[...Array(4)].map((_, index) => (
              <MdStar key={index} size={24} />
            ))}
            <p className="text-gray-600 text-sm">(111 reviews)</p>
          </div>
          <div className="flex items-center mt-4 space-x-3 text-lg">
            <span className="text-gray-400 line-through">₹{product?.old_price || "0.00"}</span>
            <span className="text-red-500 font-bold">₹{product?.new_price || "0.00"}</span>
          </div>

          {/* Select Size */}
          <div className="mt-6">
            <h4 className="text-lg font-medium">Select Size</h4>
            <div className='flex gap-3 mt-3'>
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div
                  key={size}
                  className='h-12 w-12 flex items-center justify-center text-lg font-medium border-2 border-gray-700 text-gray-700 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white transition'
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center space-x-4">
            <h4 className="text-lg font-medium">Quantity</h4>
            <div className="flex items-center border-2 border-gray-700">
              <button 
                className="px-3 py-2 bg-gray-300 hover:bg-gray-400 transition" 
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                className="px-3 py-2 bg-gray-300 hover:bg-gray-400 transition" 
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => addToCart(product.id)}
              className="flex-1 border border-green-90 bg-transparent px-6 py-3 text-green-90 transition-all hover:bg-black hover:text-white"
            >
              Add to Cart
            </button>
            <button className="flex-1 border border-green-90 bg-black px-6 py-3 text-white transition-all hover:text-black hover:bg-white">
              Buy It Now
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Product Details</h3>
            <p className="text-gray-600 mt-2">
              This high-quality {product?.name || "product"} is designed with comfort and style in mind. Perfect for any occasion, it offers a modern look with premium fabric.
            </p>
            <ul className="mt-4 space-y-1 text-gray-600">
              <li><strong>Material:</strong> 100% Cotton</li>
              <li><strong>Care:</strong> Machine Wash, Cold Water</li>
              <li><strong>Delivery:</strong> Free shipping on orders over ₹50</li>
              <li><strong>Return Policy:</strong> 30-day return & exchange policy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;

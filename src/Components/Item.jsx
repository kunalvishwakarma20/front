import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className='rounded-xl m-1 overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl'>
      <div className='relative flexCenter group m-5 overflow-hidden transition-all duration-300 ease-in-out'>
        {/* Search Icon with White Circle */}
        <Link 
          to={`/product/${id}`} 
          className='h-12 w-12 bg-white rounded-full flex items-center justify-center 
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          z-20 scale-0 group-hover:scale-100 transition-all duration-400 ease-in-out '>
          <FaSearch className='hover:rotate-90 transition-all  hover:scale-125  duration-500 text-gray-600 text-xl' />
        </Link>

        {/* Product Image */}
        <img 
          src={image} 
          alt={name} 
          className='w-full block object-cover group-hover:scale-110 transition-all duration-1000' 
        />
      </div>

      {/* Product Details */}
      <div className='p-4 text-center'>
        <h4 className='my-[6px] medium-16 text-lg font-semibold text-gray-800 line-clamp-2'>{name}</h4>
        <div className='flex justify-center gap-5'>
          <div className='text-lg font-bold text-green-600'>₹{new_price}</div>
          <div className='text-lg font-bold text-gray-400 line-through'>₹{old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;

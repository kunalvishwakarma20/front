import React from 'react'
import { POPULAR } from '../assets/data'
import Item from './Item'

const Popular = () => {
  return (
    <section className='bg-[#F3E8BD]'>
      
      <div className='max_padd_container py-16 xl:py-8 xl:w-[100%]'>
        <h3 className='text-4xl md:text-5xl text-center font-light text-gray-900 tracking-widest uppercase mb-4'>
          Signature Collection
        </h3>
        <p className='text-gray-600 text-center text-lg mb-12 font-sans'>
          Timeless Elegance, Modern Craftsmanship
        </p>
        <hr className="h-[1px] w-32 mx-auto bg-gray-400 mb-16 border-0 opacity-50" />
        
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-12'>
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              sideimage={item.sideimage}
              old_price={item.old_price}
              new_price={item.new_price}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden group"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular
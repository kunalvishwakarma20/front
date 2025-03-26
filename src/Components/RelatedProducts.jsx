import React from 'react'
import Item from './Item'
import { POPULAR } from '../assets/data'

const RelatedProducts = () => {
  return (
    <section className='bg-amber-600 '>
    <div className='max_padd_container py-12 xl:py-28 xl:w-[100%]'> 
        <h3 className='text-3xl text-center '>Related Product</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16 border-0" />


        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {POPULAR.map((item) => (
             <Item 
             key={item.id} 
             id={item.id}
             name={item.name}
             image={item.image}
             old_price={item.old_price}
             new_price={item.new_price}
           />
           
                
            ))}
        </div>
    </div>
   </section>
  )
}

export default RelatedProducts

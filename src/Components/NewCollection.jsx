import React from 'react'
import Item from './Item'
import LATEST from '../assets/latest'

const NewCollection = () => {
  return (
    <section className='bg-[#FEF3C6] '>
      <div className="items-center justify-center flex -mb-30">
        <img
          src="https://img.freepik.com/premium-photo/festival-ornamental-design_758367-184487.jpg"
          alt=""
          height={40}
          width={90}
          className="mix-blend-multiply opacity-80"
        />
      </div>
    <div className='max_padd_container  xl:py-28 xl:w-[100%]'> 
        <h3 className='text-3xl text-center '>Popluar Product</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16 border-0" />


        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {LATEST.map((item) => (
             <Item 
             key={item.id} 
             id={item.id}
             name={item.name}
             image={item.image}
             sideimage={item.sideimage}
             old_price={item.old_price}
             new_price={item.new_price}
           />
           
                
            ))}
        </div>
    </div>
   </section>
  )
}

export default NewCollection
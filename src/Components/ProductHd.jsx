import React from 'react'
import { TbArrowRight } from 'react-icons/tb'; 


const ProductHd = (props) => {
  const {product} = props
  return (
   <div className='mt-27 flex items-center flex-wrap gap-x-2 medium-15 my-4 capitalize' >
     Home < TbArrowRight/>Shop  < TbArrowRight/> {product.category} < TbArrowRight/> {product.name}
   </div>
  )
}

export default ProductHd
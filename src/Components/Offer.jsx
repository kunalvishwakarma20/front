import React from 'react'
import bannerImage from "../assets/banneroffer.webp" // Add your image import

const Offer = () => {
  return (
    <section 
      className='w-full px-4 py-24 mt-16 bg-cover bg-center relative'
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 " />
      
      <div className='relative mx-auto max-w-screen-xl px-6 lg:px-20'>
        <h2 className='text-4xl md:text-5xl text-white font-light tracking-widest uppercase mb-4'>
          Wedding Sale
        </h2>
        <h3 className='text-2xl md:text-3xl text-white/90 capitalize mb-8'>
          Men’s Special Wear
        </h3>
        <button className='text-base md:text-lg border-2 border-green-600 bg-green-600 px-8 py-3 text-white uppercase tracking-wide rounded-full transition-all duration-300 hover:bg-black hover:border-black'>
          Go to Store
        </button>
      </div>
    </section>
  )
}

export default Offer
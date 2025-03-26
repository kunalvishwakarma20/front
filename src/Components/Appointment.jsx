import React from 'react'

const Appointment = () => {
  return (
    <div className="appointment-container mt-5 flex flex-col md:flex-row items-center justify-between 
  shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-2xl p-6 max-w-6xl mx-auto bg-[#FEF3C6]">
      {/* Text Section */}
      <div className="appointment-text-section w-full md:w-1/2 px-6 py-10 text-center md:text-left">
        <div className="heading-flower-image text-3xl text-amber-600 mb-4">
          ✿ {/* Using a Unicode flower as placeholder; replace with your icon/image */}
        </div>
        <h3 className="appointment-heading text-2xl md:text-3xl font-serif text-gray-900 mb-4">
          Your Personal Stylist <span className="italic font-light">at Your Service!</span>
        </h3>
        <p className="appointment-msg text-gray-600 text-lg mb-8">
          Consult our expert stylist to curate a look for your D-day
        </p>
        <div className="text-button-section flex flex-col gap-4">
          {/* Commented out Store Visit button as in original */}
          {/* <a
            href="https://www.manyavar.com/en-in/appointment?tab=storeVisit"
            className="btn btn-outline-primary store-btn w-full py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-lg uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Book a Store Visit
          </a> */}
          <a
            href="https://www.manyavar.com/en-in/appointment?tab=videoCall"
            className="btn btn-primary video-btn w-full py-3 px-6 bg-blue-600 text-white rounded-lg uppercase tracking-wide hover:bg-blue-800 transition-all duration-300"
          >
            Book a Video Call
          </a>
        </div>
      </div>

      {/* Image Section - Hidden on medium and below */}
      <div className="appointment-image-section w-full md:w-1/2 hidden md:block">
        <img
          alt="appointment_image"
          src="https://manyavar.scene7.com/is/image/manyavar/Video_Call_Banner_2_24-02-2025-09-49?$WT_HP_BAA_D$"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default Appointment;
import React from "react";

const EmailButton = () => {
  const gmailAddress = "yourbusiness@gmail.com"; // Your Gmail
  const customerEmail = "customer@example.com"; // Customer's email
  const subject = "Customer Inquiry";
  const body = "Hello, I have a question about...";

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${gmailAddress},${customerEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center text-center space-y-3 p-6">
      <h3 className="text-lg font-bold text-gray-800">
        🎉 Get Exclusive Offers in Your Inbox!
      </h3>
      <h4 className="text-sm text-gray-600">
        Subscribe to our newsletter and stay updated.
      </h4>

      <button
        onClick={handleEmailClick}
        className="relative flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-lg 
        bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-in-out
        hover:from-purple-600 hover:to-blue-500 hover:shadow-xl hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        📧 Subscribe Now
      </button>
    </div>
  );
};

export default EmailButton;

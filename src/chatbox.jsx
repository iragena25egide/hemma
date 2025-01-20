import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const phoneNumber = "+250798555420";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 sm:block z-50">
      {/* WhatsApp Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="bg-customTeal text-white p-4 rounded-full shadow-lg hover:bg-customTeal transition"
      >
        <FaWhatsapp size={22} /> {/* WhatsApp icon */}
      </button>

      {/* Chat Box */}
      {showChat && (
        <div
          className="fixed bottom-16 right-3 bg-white shadow-lg rounded-lg 
          w-full sm:w-[90%] md:w-[400px] lg:w-[500px] max-w-full"
          style={{
            zIndex: 9999,
            width: "94%", // Set default width for mobile views (adjustable)
            maxWidth: "400px", // Ensure it doesn't grow too large
          }}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between bg-customTeal p-2 md:p-4 rounded-t-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mr-2">
                {/* Logo */}
                <img
                  src="../assets/images/logo.png"
                  alt="Hemma Investment Logo"
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                />
              </div>
              <div className="text-white font-bold text-xs sm:text-sm md:text-base">
                Hemma Investment
              </div>
            </div>
            <button onClick={() => setShowChat(false)} className="text-white text-base md:text-xl">
              ✕
            </button>
          </div>

          {/* Chat body */}
          <div
            className="p-2 md:p-4 rounded-b-lg"
            style={{
              backgroundImage: "url('../assets/images/whatsapp-bg.png')",
              backgroundSize: "cover",
            }}
          >
            {/* Welcome message */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-2 md:mb-4 w-4/5 sm:w-3/4 ml-2 md:ml-4">
              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                Hemma Investment Li...
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">Hi there 👋</p>
              <p className="text-gray-600 text-xs sm:text-sm">How can we help you?</p>
            </div>

            {/* Input and Send Button */}
            <div className="bg-white rounded-full flex items-center px-2 py-1 md:px-4 md:py-2 shadow-md">
              <input
                type="text"
                className="w-full border-none focus:outline-none text-xs sm:text-sm"
                placeholder="Write a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                className="bg-customTeal rounded-full p-2"
              >
                <IoSend className="text-white" size={16} md:size={18} /> {/* Send icon */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;

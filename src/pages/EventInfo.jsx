import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EventInfo() {

  const navigate = useNavigate();

  useEffect(() => {
    const registered = localStorage.getItem("registration");

    if (registered) {
      navigate("/submitted");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-4">
        Tech Innovation Conference 2026
      </h1>

      <p className="text-lg mb-2">
        📅 June 15, 2026
      </p>

      <p className="text-lg mb-2">
        📍 Kigali Convention Center
      </p>

      <p className="text-center max-w-xl mb-6">
        Join developers, designers, entrepreneurs and innovators to explore
        the future of technology, artificial intelligence, and digital
        transformation.
      </p>

      <button
        onClick={() => navigate("/register")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Register Now
      </button>

    </div>
  );
}

export default EventInfo;
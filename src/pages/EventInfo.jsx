import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EventInfo(){

  const navigate = useNavigate();

  useEffect(()=>{
    const registered = localStorage.getItem("registration");

    if(registered){
      navigate("/submitted");
    }
  },[]);

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">

      <div className="text-center max-w-xl p-8">

        <h1 className="text-5xl font-bold mb-6">
          Tech Innovation Conference 2026
        </h1>

        <p className="text-lg mb-2">
          📅 June 15, 2026
        </p>

        <p className="text-lg mb-4">
          📍 Kigali Convention Center
        </p>

        <p className="mb-6">
          Join developers, designers, entrepreneurs and innovators to explore the
          future of technology, AI, and digital transformation.
        </p>

        <button
          onClick={()=>navigate("/register")}
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          Register Now
        </button>

      </div>

    </div>

  )
}

export default EventInfo;
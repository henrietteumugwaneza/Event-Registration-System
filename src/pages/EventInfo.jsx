import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EventInfo() {

  const navigate = useNavigate();

  useEffect(()=>{
    const registered = localStorage.getItem("registration");

    if(registered){
      navigate("/submitted");
    }
  },[]);

  return (

<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">

{/* HERO SECTION */}

<div className="flex flex-col items-center justify-center text-center py-24 px-6">

<h1 className="text-5xl font-bold mb-6">
Tech Innovation Conference
</h1>

<p className="text-gray-300 mb-2">
📅 June 15, 2026
</p>

<p className="text-gray-300 mb-6">
📍 Kigali Convention Center
</p>

<p className="max-w-xl text-gray-400 mb-8">
Join developers, designers and entrepreneurs to explore the future of
AI, Web Development, and Digital Innovation.
</p>

<button
onClick={()=>navigate("/register")}
className="bg-amber-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-amber-300 transition transform hover:scale-105"
>
Register Now
</button>

</div>


{/* SPEAKERS SECTION */}

<div className="px-10 py-16">

<h2 className="text-3xl font-semibold text-center mb-12">
Key Speakers
</h2>

<div className="grid md:grid-cols-3 gap-8">

{/* Speaker 1 */}

<div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg">

<img
src="https://i.pravatar.cc/200?img=12"
className="w-28 h-28 rounded-full mx-auto mb-4"
/>

<h3 className="text-xl font-semibold">
Dr. Sarah Kim
</h3>

<p className="text-gray-400">
AI Researcher
</p>

</div>


{/* Speaker 2 */}

<div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg">

<img
src="https://i.pravatar.cc/200?img=32"
className="w-28 h-28 rounded-full mx-auto mb-4"
/>

<h3 className="text-xl font-semibold">
James Walker
</h3>

<p className="text-gray-400">
Cloud Architect
</p>

</div>


{/* Speaker 3 */}

<div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg">

<img
src="https://i.pravatar.cc/200?img=45"
className="w-28 h-28 rounded-full mx-auto mb-4"
/>

<h3 className="text-xl font-semibold">
Maria Gomez
</h3>

<p className="text-gray-400">
Frontend Engineer
</p>

</div>

</div>

</div>


{/* SCHEDULE SECTION */}

<div className="px-10 py-16 bg-gray-950">

<h2 className="text-3xl font-semibold text-center mb-12">
Conference Schedule
</h2>

<div className="max-w-3xl mx-auto space-y-6">

<div className="bg-gray-800 p-6 rounded-xl flex justify-between">

<span>09:00 AM</span>
<span>Opening Keynote</span>

</div>

<div className="bg-gray-800 p-6 rounded-xl flex justify-between">

<span>10:30 AM</span>
<span>Future of AI</span>

</div>

<div className="bg-gray-800 p-6 rounded-xl flex justify-between">

<span>01:00 PM</span>
<span>Modern Web Development</span>

</div>

<div className="bg-gray-800 p-6 rounded-xl flex justify-between">

<span>03:00 PM</span>
<span>Startup Innovation Panel</span>

</div>

</div>

</div>

</div>

  );
}

export default EventInfo;
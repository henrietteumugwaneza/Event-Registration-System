import React from "react";
import { useNavigate } from "react-router-dom";

function Review(){

const navigate = useNavigate();
const data = JSON.parse(localStorage.getItem("registration"));

return(

<div className="min-h-screen flex items-center justify-center bg-gray-900">

<div className="bg-gray-800 text-white p-10 rounded-2xl shadow-xl w-full max-w-md">

<h2 className="text-2xl font-semibold mb-6 text-center">
Review Your Details
</h2>

<div className="space-y-2 text-gray-300">

<p><b>Name:</b> {data.name}</p>
<p><b>Email:</b> {data.email}</p>
<p><b>Phone:</b> {data.phone}</p>
<p><b>Organization:</b> {data.organization}</p>
<p><b>Ticket:</b> {data.ticket}</p>
<p><b>Notes:</b> {data.notes}</p>

</div>

<div className="flex gap-4 mt-6">

<button
onClick={()=>navigate("/register")}
className="flex-1 bg-gray-600 py-2 rounded-lg"
>
Edit
</button>

<button
onClick={()=>navigate("/confirmation")}
className="flex-1 bg-amber-400 text-black py-2 rounded-lg"
>
Confirm
</button>

</div>

</div>

</div>

)

}

export default Review
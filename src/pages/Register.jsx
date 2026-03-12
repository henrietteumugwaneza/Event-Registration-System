import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    organization:"",
    ticket:"Standard",
    notes:""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("registration",JSON.stringify(formData));
    navigate("/review");
  };

  return(

<div className="min-h-screen flex items-center justify-center bg-gray-900">

<form
onSubmit={handleSubmit}
className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-4 text-white"
>

<h2 className="text-3xl font-semibold text-center mb-4">
Conference Registration
</h2>

<input
type="text"
name="name"
placeholder="Full Name"
className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email Address"
className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
onChange={handleChange}
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
onChange={handleChange}
/>

<input
type="text"
name="organization"
placeholder="Organization"
className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
onChange={handleChange}
/>

<select
name="ticket"
className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
onChange={handleChange}
>
<option>Standard</option>
<option>VIP</option>
<option>Student</option>
</select>

<textarea
name="notes"
placeholder="Additional notes"
className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
/>

<button
className="w-full bg-amber-400 text-black py-3 rounded-lg font-semibold hover:bg-amber-300 transition"
>
Review Registration
</button>

</form>

</div>

  )
}

export default Register
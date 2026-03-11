import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    localStorage.setItem("registration", JSON.stringify(formData));
    navigate("/review");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >

        <h2 className="text-2xl font-bold text-center mb-4">
          Event Registration
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-3 w-full rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border p-3 w-full rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border p-3 w-full rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization"
          className="border p-3 w-full rounded"
          onChange={handleChange}
        />

        <select
          name="ticket"
          className="border p-3 w-full rounded"
          onChange={handleChange}
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        <textarea
          name="notes"
          placeholder="Additional notes"
          className="border p-3 w-full rounded"
          onChange={handleChange}
        />

        <button
          className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
        >
          Review Registration
        </button>

      </form>

    </div>

  );
}

export default Register;
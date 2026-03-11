import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    ticket: "Standard",
    diet: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("registration", JSON.stringify(formData));

    navigate("/review");
  };

  return (
    <div className="flex justify-center p-10">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow w-96"
      >

        <h2 className="text-2xl mb-6 font-bold">
          Event Registration
        </h2>

        <input
          className="border p-2 w-full mb-3"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          className="border p-2 w-full mb-3"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          className="border p-2 w-full mb-3"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          className="border p-2 w-full mb-3"
          name="organization"
          placeholder="Organization"
          onChange={handleChange}
        />

        <select
          name="ticket"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        <textarea
          name="notes"
          placeholder="Additional notes"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Review Registration
        </button>

      </form>

    </div>
  );
}

export default Register;
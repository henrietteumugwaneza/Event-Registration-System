import React from "react";
import { useNavigate } from "react-router-dom";

function Review() {

  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("registration"));

  return (
    <div className="flex justify-center p-10">

      <div className="bg-white p-8 shadow rounded w-96">

        <h2 className="text-2xl font-bold mb-6">
          Review Your Information
        </h2>

        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Phone:</b> {data.phone}</p>
        <p><b>Organization:</b> {data.organization}</p>
        <p><b>Ticket:</b> {data.ticket}</p>
        <p><b>Notes:</b> {data.notes}</p>

        <div className="flex gap-4 mt-6">

          <button
            onClick={() => navigate("/register")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => navigate("/confirmation")}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
}

export default Review;
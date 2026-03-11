import React from "react";
import { useNavigate } from "react-router-dom";

function Submitted() {

  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("registration"));

  const cancelRegistration = () => {
    localStorage.removeItem("registration");
    navigate("/");
  };

  return (
    <div className="flex justify-center p-10">

      <div className="bg-white p-8 shadow rounded w-96">

        <h2 className="text-2xl font-bold mb-4">
          You Already Registered
        </h2>

        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Ticket:</b> {data.ticket}</p>
        <p><b>Notes:</b> {data.notes}</p>

        <button
          onClick={cancelRegistration}
          className="bg-red-600 text-white px-4 py-2 mt-5 rounded"
        >
          Cancel Registration
        </button>

      </div>

    </div>
  );
}

export default Submitted;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EventInfo from "./pages/EventInfo";
import Register from "./pages/Register";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import Submitted from "./pages/Submitted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
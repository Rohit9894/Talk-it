import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./ChatPage";


import HomePage from "./HomePage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;

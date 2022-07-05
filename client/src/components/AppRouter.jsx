import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default AppRouter;

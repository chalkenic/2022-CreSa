import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import SearchPage from "./SearchPage";
import CitiesPage from "./CitiesPage";
import store from "../store";

const AppRouter = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/saved" element={<CitiesPage />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default AppRouter;

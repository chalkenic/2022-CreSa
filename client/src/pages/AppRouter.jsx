import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import SearchPage from "./SearchPage";
import AdminPage from "./AdminPage";
import store from "../store";

const AppRouter = () => {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default AppRouter;

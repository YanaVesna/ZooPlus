import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import { HeadLineCard } from "./commponents/HeadLineCard";
import { Hero } from "./commponents/Hero";
import NavBar from "./commponents/NavBar";
import Footer from "./commponents/Footer";
import Display from "./commponents/Display";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HeadLineCard/>
            </>
          }
        ></Route>
        <Route path="/display" element={<Display />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

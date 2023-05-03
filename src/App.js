import "./App.css";
import Footer from "./components/footer";
import FaqPage from "./Pages/faqPages";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/sharedLayout";
import Home from "./Pages/Home";
import FaqPages from "./Pages/faqPages";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="faq" element={<FaqPages />}></Route>
           <Route path="/" element={<Footer />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

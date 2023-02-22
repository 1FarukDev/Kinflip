import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Sponsors from "./components/sponsors";
import About from "./components/About";
import Sponsorsdetails from "./components/Sponsordetails";
import Data from "./Data";
import Nominees from "./components/nominees";
import Gallery from "./components/gallery";
import nomineesData from "./nomineesData";
import Faq from "./components/Faq";
import Footer from "./components/footer";
import FaqPage from "./Pages/faqPages";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/sharedLayout";
import Home from "./Pages/Home";
import FaqPages from "./Pages/faqPages";

function App() {
  // const [timerDays, setTimerDays] = useState();
  // const [timerHours, setTimerHours] = useState();
  // const [timerMinutes, setTimerMinutes] = useState();
  // const [timerSeconds, setTimerSeconds] = useState();

  // let interval;

  // const startTimer = () => {
  //   const countDownDate = new Date("May 1, 2023").getTime();
  //   interval = setInterval(() => {
  //     const now = new Date().getTime();

  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       // Stop Timer
  //       clearInterval(interval.current);
  //     } else {
  //       // Update the Timer
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   });
  // };
  // // console.log(Data)
  // const Details = Data.map((item) => {
  //   return (
  //     <Sponsorsdetails
  //       coverImg={item.Image}
  //       name={item.name}
  //       founder={item.Founder}
  //     />
  //   );
  // });
  // useEffect(() => {
  //   startTimer();
  // });
  // // console.log(nomineesData)
  // const nomineesDetails = nomineesData.map((nominees) => {
  //   return (
  //     <Nominees
  //       img={nominees.Image}
  //       title={nominees.title}
  //       text={nominees.Text}
  //     />
  //   );
  // });
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* <Navbar /> */}
            <Route index element={<Home />} />
            <Route path="faq" element={<FaqPages />}></Route>
            {/* <Hero
              timerDays={timerDays}
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
            />
            <Sponsors />
            <About />
            <div id="sponsor-details">{Details}</div>
            <Gallery />
            <div id="nomineesDetails">{nomineesDetails}</div>
            <Faq /> */}
           <Route path="/" element={<Footer />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

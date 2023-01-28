import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Sponsors from "./components/sponsors";
import About from "./components/About";
import Sponsorsdetails from "./components/Sponsordetails";
import Data from "./Data";


function App() {
  // console.log(Data)
  const Details = Data.map(item => {
    return(
      <Sponsorsdetails 
        coverImg = {item.image}
        name = {item.name}
        founder = {item.Founder}
      />
    )
  
  })
   
  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      { Details}
    </div>
  );
}

export default App;

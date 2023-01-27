import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Sponsors from "./components/sponsors";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
    </div>
  );
}

export default App;

import "./App.css";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Mission from "./components/Mission";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Values from "./components/Values";
import CoreSectors from "./components/CoreSectors";
import "./fonts/Trebuc/trebuc.ttf";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <CoreSectors /> */}
      <Mission />
      <Approach />
      <Founder />
      <Values />
      {/* <CoreSectors /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

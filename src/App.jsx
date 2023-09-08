import "./App.css";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Mission from "./components/Mission";
import Hero from "./components/Hero";
import "./fonts/Trebuc/trebuc.ttf";
function App() {
  return (
    <div>
      <Hero />
      <Mission />
      <Approach />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

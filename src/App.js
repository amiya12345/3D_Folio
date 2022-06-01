import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import ReactGA from "react-ga";

const TRACKING_ID = "G-D2QEDW92TL";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;

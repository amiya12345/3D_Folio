import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import Project1 from './components/pages/Project1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Home />
      <Work />
      <About />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <main className='App'>
        <Routes>
          <Route path='/project1' exact element={Project1()} />
          <Route path='/' element={HomePage()} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

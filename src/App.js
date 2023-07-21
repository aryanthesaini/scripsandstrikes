import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Trades from './components/Trades';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Trades />
      <Contact />
    </div>
  );
}

export default App;

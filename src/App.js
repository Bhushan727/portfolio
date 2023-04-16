
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
        
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Resume />

    </div>
  );
}

export default App;

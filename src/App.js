import './App.css';
import About from './components/About/About';
import Content from './components/Content/Content';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content />
      <About />
      <Service />
      <Portfolio />
    </div>
  );
}

export default App;

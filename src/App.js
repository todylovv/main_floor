import './App.css';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content />

      <Service />
      <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Portfolio/>
      <Footer />
      
    </div>
  );
}

export default App;

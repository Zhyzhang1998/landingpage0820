import logo from './logo.svg';
import './App.css';

import Ourprice from './components/Ourprice';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Partners from './components/Partners';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Testimonial from './components/Testimonial'


function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Partners />
      <Benefits />
      <Features />
      <Testimonial />
      <Ourprice />
      <WhyUs />
      <ContactForm />
      <Footer />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
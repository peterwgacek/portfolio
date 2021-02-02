
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Design from './components/Design';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Design />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;

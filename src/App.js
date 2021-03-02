
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Design from './components/Design/Design';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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

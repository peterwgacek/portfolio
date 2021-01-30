
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Footer from './components/Footer';
import Design from './components/Design';

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
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default App;

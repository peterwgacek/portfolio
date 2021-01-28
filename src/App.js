
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
// import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />

        {/* <Footer /> */}
      </>
    </div>
  );
}

export default App;

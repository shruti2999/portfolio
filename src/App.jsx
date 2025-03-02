import style from './App.module.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div className={style.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    </div>
  )
}

export default App

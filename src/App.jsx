import style from './App.module.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

function App() {

  return (
    <div className={style.App}>
    <Navbar/>
    <Hero/>
    <About/>
    </div>
  )
}

export default App

import React,{useState} from "react";
import{getImageUrl} from "../../utils"

import styles from "./Navbar.module.css";

  const Navbar = () => {
  const[menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a  className={styles.title}href='/'>Portfolio</a>
        <div className={styles.menu}>
          <img 
          className={styles.menuBtn} 
          src ={
            menuOpen
            ? getImageUrl("/nav/closeIcon.png")
            :getImageUrl("/nav/menuIcon.png")
           }
          alt="menu-button"
          onClick={()=> setMenuOpen(!menuOpen)}
          />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`}
         onClick={() => setMenuOpen(false)}
         >
          <li><a href='#about'>About</a></li>
          <li><a href='#Experience'>Experience</a></li>
          <li><a href='#Project'>Project</a></li>
          <li><a href='#Contact'>Contact</a></li>
        </ul>
        </div>
    </nav>
  );
};
export default Navbar;

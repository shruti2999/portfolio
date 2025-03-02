import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
const Hero = () => {
  return (
    <section className={styles.container}> 
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Shruti</h1>
    <p className={styles.description}>
        I'm a front-end developer.
    </p>
    <a href="mailto:shrutikumari9208@gmail.com" className={styles.contactbtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage(1).png")} alt="hero-img" className={styles.heroimg}/>
    
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
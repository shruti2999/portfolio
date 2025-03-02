 import React from 'react'
import { getImageUrl } from '../../utils'
 
 const About = () => {
   return (
    <section>
        <h2>About</h2>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"/>
    </section>
   )
 }
 
 export default About
import React from "react";

import Slid3rJS from '../../../plugins/Slid3rJS';

export default function About(props){

   const collectiveData = [
      {img: 'images/our-collective/6346-1478110959-plateformefreelance.jpg'},
      {img: 'images/our-collective/1521834681434.jpg'},
      {img: 'images/our-collective/collective-work-freelance-collab-61b3609e4958f.jpg'},
      {img: 'images/our-collective/developers-aboutUs.jpeg'},
   ]

   let fix = true
   React.useEffect(() => {
      fix = !fix
      if(fix === true){Slid3rJS('.about-slider', 1, 1, false, 0.5, 'ease', 2)}
   }, [])

   return(
      <section className="about-wrap">
         <div className="about-container">
            <ul className="about-slider">
               <li className="item">
                  <div className="about-box-img">
                     <img src="images/our-collective/6346-1478110959-plateformefreelance.jpg" alt="" />
                  </div>
                  <div className="about-info">
                     <h3>About our collective</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum.</p>
                     <img src="images/Wooden-design/wooden-wall-dark.jpg" alt="" />
                  </div>
               </li>
               <li className="item">
                  <div className="about-box-img">
                     <img src="images/our-collective/1521834681434.jpg" alt="" />
                  </div>
                  <div className="about-info">
                     <h3>About our collective</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum.</p>
                     <img src="images/Wooden-design/wooden-wall-dark.jpg" alt="" />
                  </div>
               </li>
               <li className="item">
                  <div className="about-box-img">
                     <img src="images/our-collective/collective-work-freelance-collab-61b3609e4958f.jpg" alt="" />
                  </div>
                  <div className="about-info">
                     <h3>About our collective</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum.</p>
                     <img src="images/Wooden-design/wooden-wall-dark.jpg" alt="" />
                  </div>
               </li>
               <li className="item">
                  <div className="about-box-img">
                     <img src="images/our-collective/developers-aboutUs.jpeg" alt="" />
                  </div>
                  <div className="about-info">
                     <h3>About our collective</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nostrum.</p>
                     <img src="images/Wooden-design/wooden-wall-dark.jpg" alt="" />
                  </div>
               </li>
            </ul>
         </div>
      </section>
   )
}
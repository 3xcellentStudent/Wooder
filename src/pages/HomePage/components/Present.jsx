import React from "react";
import DescScroll from '../../DesripComp/DescScroll';

export default function Present(){

   return(
      <section className="present-container">
         <div className="present-part">
            <DescScroll title="Scroll" />
            <h2>Wooder
            <p>----furniture
            </p>
            </h2>
            <div className="img-prlx-box">
               <img src="images/imagesBig.jpg" alt="" />
            </div>
         </div>
         <div className="present-part">
            <h2>Project
            <p>----design</p>
            </h2>
            <div className="img-prlx-box">
               <img src="images/photo-home-in-forest.jpg" alt="photo home" />
            </div>
         </div>
      </section>
   )
}
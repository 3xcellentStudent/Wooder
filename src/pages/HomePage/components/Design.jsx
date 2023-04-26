import React from "react";
import { NavLink } from "react-router-dom";

export default function Design(){

   return(
      <section className="design-wrap-op">
         <div className="design-part obsOpty">
            <div className="design-info">
               <h2>Wooden design for <br /> your bedroom</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident soluta, dolores aliquid dicta saepe.</p>
               <NavLink className="more lines-btn" to="/design">
                  Learn More
                  <div className="arrow-polygon"></div>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
               </NavLink>
            </div>
            <div className="design-box-img obsRightS">
               <div className="img-prlx-box">
                  <h6>kitchen</h6>
                  <img src="images/Wooden-design/photo-1622372738946-62e02505feb3.jpg" alt="kitchen" />
               </div>
            </div>
         </div>
         <div className="design-part obsOpty">
            <div className="design-info">
               <h2>Or for your kitchen</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident soluta, dolores aliquid dicta saepe.</p>
               <NavLink className="more lines-btn" to="/design">
                  Learn More
                  <div className="arrow-polygon"></div>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
                  <span className="btn-line"></span>
               </NavLink>
            </div>
            <div className="design-box-img obsLeftS">
               <div className="img-prlx-box">
                  <h6>Hall</h6>
                  <img src="images/Wooden-design/white-sectional.jpg" alt="Hall" />
               </div>
            </div>
         </div>
         <span className="end-line obsOpty"></span>
      </section>
   )
}
import React from "react";

export default function Loader(){

   React.useEffect(() => {
      Loading()
   })

   return(
      <div className="loader-container">
         <div className="loader-part">
            <h2>Wooder
            <p>----furniture</p>
            </h2>
            <img src="images/imagesBig.jpg" alt="" />
         </div>
         <div className="loader-part">
            <h2>Project
            <p>----design</p>
            </h2>
            <img src="images/photo-home-in-forest.jpg" alt="photo home" />
            
            <div className="svg box1">
               <svg viewBox="0 0 140 140">
                  <circle cx={70} cy={70} r={20} />
               </svg>
            </div>
            <div className="svg box2">
               <svg viewBox="0 0 140 140">
                  <circle cx={70} cy={70} r={35} />
               </svg>
            </div>
            <div className="svg box3">
               <svg viewBox="0 0 140 140">
                  <circle cx={70} cy={70} r={50} />
               </svg>
            </div>
            <div className="svg box4">
               <svg viewBox="0 0 140 140">
                  <circle cx={70} cy={70} r={65} />
               </svg>
            </div>
         </div>
      </div>
   )
}

function Loading(){
   setTimeout(() => {
      document.querySelector('.loader-container').style.pointerEvents = 'none'
      document.querySelectorAll('.loader-part').forEach(item => {
         item.classList.add('inactive')
      })
      document.querySelectorAll('.svg').forEach(item => {
         item.classList.add('inactive')
      })
      // document.querySelector('.box-opacity').classList.add('show')
   }, 2500)
}
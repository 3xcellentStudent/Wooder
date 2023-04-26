import React from "react";

import ObservEff from '../../../plugins/ObservEff'; 
import FurnitureAccord from "./FurnitureAccord";

export default function FurnitureSect(props){
   
   React.useEffect(() => {
      ObservEff('.furniture-container', 1)
   }, [])

   return(
      <div className="furniture-item">
         <div className="furniture-container obsRot">
            <div className="furniture-accordeon">
               <ul className="furniture-page-container">
                  {props.arr.map((item, index) => {
                     return(
                        <FurnitureAccord key={index} index={index} img={item.img} way={item.way} />
                     )
                  })}
               </ul>
            </div>
            <div className="furniture-info">
               <h3>{props.title}</h3>
               <p>{props.descr}</p>
            </div>
         </div>
      </div>
   )
}
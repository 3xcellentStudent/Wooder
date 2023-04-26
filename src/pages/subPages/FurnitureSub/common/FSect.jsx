import React from "react";

import ObservEff from '../../../../plugins/ObservEff';
import FAccord from "./FAccord";
import LinkToCF from "../../../../CLientForm/LinkToCF";
import SVGInfo from "./SVGInfo";

export default function FSect(props){

   let lock = true
   const [Descr, setDescr] = React.useState([]),
         [Details, setDetails] = React.useState([]),
         [AccBtn, setAccBtn] = React.useState([])

   React.useEffect(() => {
      ObservEff('.furniture-container', 1)
      if(lock){
         lock = !lock
         setDescr(document.querySelectorAll('.p-descr-wrap'))
         setDetails(document.querySelectorAll('.p-details-wrap'))
         setAccBtn(document.querySelectorAll('.furniture-container button'))
      }
   }, [])

   function ToggleElems(e){
      document.querySelectorAll('#svg-btn-furniture').forEach((item, index) => {
         if(e.target === item){
            Descr[index].classList.toggle('active')
            Details[index].classList.toggle('active')
            AccBtn[index].classList.toggle('active')
         }
      })
   }

   return(
      <div className="furniture-item">
         <div className="furniture-container obsRot">
            <button id="svg-btn-furniture" onClick={e => {ToggleElems(e)}}><SVGInfo/></button>
            <div className="furniture-accordeon">
               <ul className="furniture-page-container">
                  {props.arr.map((item, index) => {
                     return(
                        <FAccord key={index} img={item.img} />
                     )
                  })}
               </ul>
            </div>
            <div className="furniture-info">
               <h3>{props.title}</h3>
               <div className="p-container">
                  <div className="p-descr-wrap">
                     <p className="p-descr">{props.descr}</p>
                  </div>
                  <div className="p-details-wrap active">
                     <ul className="p-details">
                        {props.details.map((item, index) => {
                           return(
                              <li key={index}>{item.text}</li>
                           )
                        })}
                     </ul>
                  </div>
               </div>
               <span className="furniture-price">{props.price}</span>
               <LinkToCF/>
            </div>
         </div>
      </div>
   )
}
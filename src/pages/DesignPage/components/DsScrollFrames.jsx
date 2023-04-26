import React from "react"

import LinkToCF from "../../../CLientForm/LinkToCF";

export default function DsScrollFrames(props){

   const [imgArr, setImgArr] = React.useState([])

   function ImgClick(e){e.target.classList.toggle('active')}

   return(
      <>
         <li className="frame text right">
            <h2>{props.title}</h2>
            <p>{props.descr}</p>
            <LinkToCF/>
         </li>
         {props.imgSrc.map((item, index) => {
            return(
               <li key={index} className={`frame ${item.clsName}`}>
                  <img onClick={e => {ImgClick(e)}} className={`frame-img ${item.clsName}`} src={`images/Wooden-design/${item.img}`} alt="" />
               </li>
            )
         })}
      </>
   )
}
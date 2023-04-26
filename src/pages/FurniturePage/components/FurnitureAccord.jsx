import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setIndex } from '../../../store/indexSlice';

export default function FurnitureAccord(props){

   const [slItem, setSlItem] = React.useState()

   const dispatch = useDispatch()
   
   function Position(index){dispatch(setIndex(index))}

   function openSlide(e){
      e.preventDefault()
      const {target} = e
      
      console.log(target.getAttribute('class'))
      slItem.forEach(item => {if(item.getAttribute('class').includes('open') && item !== target) item.classList.remove('open')})
      target.classList.toggle('open')
   }

   React.useEffect(() => {
      setSlItem(document.querySelectorAll('.slides-item'))
   }, [])

   return(
         <li className="slides-item main" onClick={e => openSlide(e)}>
            <div className="furniture-btn">
                  <NavLink onClick={() => {Position(props.index)}} className="more lines-btn" to={props.way} >Learn More
                     <div className="arrow-polygon"></div>
                     <div className="btn-line"></div>
                     <div className="btn-line"></div>
                     <div className="btn-line"></div>
                     <div className="btn-line"></div>
                  </NavLink>
               </div>
            <div className="furniture-img">
               <img src={`images/subFur/${props.img}`} alt="furniture" />
            </div>
         </li>
   )
}
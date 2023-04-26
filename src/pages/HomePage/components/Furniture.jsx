import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setIndex } from '../../../store/indexSlice';

export default function Furniture(){

   const datas = [
      {title: 'Bathroom',path: '1200-1200-line-solid-teak-column.webp', way: '/furniture'},
      {title: 'Bedroom',path: 'b8ba5e1d08df25e66e70b71176b04f5f.jpg', way: '/furniture'},
      {title: 'Hallroom',path: 'elephant_1.jpg', way: '/furniture'},
      {title: 'Kitchen',path: 'wooden-kitchen-shaker-decor.jpg', way: '/furniture'},
   ]

   const dispatch = useDispatch()

   function Position(index){
      dispatch(setIndex(index))
   }

   const elems = datas.map((item, index) => {
      return(
         <li key={item.title} className="slides-item">
               <h5>{item.title}</h5>
               <div className="furniture-btn">
                  <NavLink onClick={() => {Position(index)}} className="more lines-btn" to={item.way}>Learn More
                     <div className="arrow-polygon"></div>
                     <div className="btn-line"></div>
                     <div className="btn-line"></div>
                     <div className="btn-line"></div>
                     <div className="btn-line"></div>
                  </NavLink>
               </div>
               <div className="furniture-img">
                  <img src={`images/fur-for-homeP/${item.path}`} alt="furniture" />
               </div>
            </li>
      )
   })

   return(
      <section className="furniture-wrap">
         <ul className="furniture-home-container obsBBoxDark">
            {elems}
         </ul>
         <div className="furniture-info">
            <h2>We help you to find furniture</h2>
         </div>
      </section>
   )
}
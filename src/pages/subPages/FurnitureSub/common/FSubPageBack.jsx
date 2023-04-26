import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setIndex } from '../../../../store/indexSlice';

export default function FSubPageBack(){

   const dispatch = useDispatch()

   return(
      <div className="btn-back-container">
         <NavLink onClick={() => {dispatch(setIndex(0))}} className="btn-back" to="/furniture">
            <div className="arrow-polygon"></div>
            Back
         </NavLink>
      </div>
   )
}
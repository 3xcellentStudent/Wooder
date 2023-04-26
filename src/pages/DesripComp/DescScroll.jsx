import React from "react";
import SVGDescr from './SVGDescr';

export default function DescScroll(props){
   return(
      <div className="desc-scroll-wrap">
         <span>{props.title}</span>
         <SVGDescr/>
      </div>
   )
}
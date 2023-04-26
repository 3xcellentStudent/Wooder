import { NavLink } from "react-router-dom";

export default function LinkToCF(){
   return(
      <div className="ds-scroll-link-wrap">
         <div className="ds-scroll-link-cont">
            <NavLink to="/client">contact us</NavLink>
         </div>
      </div>
   )
}
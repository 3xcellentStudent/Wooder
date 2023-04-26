import React from "react";
import DesignContext from '../DesignContext';

export default function DsScrollNav(){

   let elems = [],
       lock = true
       
   React.useEffect(() => {
      if(lock){
         document.querySelectorAll('.ds-scroll-nav-cont li').forEach(item => {elems.push(item)})
         elems[0].classList.add('active')
         lock = !lock
      }
   }, [])

   // const datas = [
   //    {title: '-- Bathroom'},
   //    {title: '-- Bedroom'},
   //    {title: '-- Hall'},
   //    {title: '-- Kitchen'},
   // ]

   const datas = [
      {title: '-- 1'},
      {title: '-- 2'},
      {title: '-- 3'},
      {title: '-- 4'},
   ]

   // function setActive(e){
   //    elems.forEach((item, index) => {
   //       item.classList.remove('active')
   //       if(e.target === item.children[0]){
   //          item.classList.add('active');

   //       }
   //    })
   //    // elems.forEach(item => {item.classList.remove('active')})
   //    // elems[i].classList.add('active')
   // }

   return(
      <div className="ds-scroll-nav-wrap">
         <div className="ds-scroll-nav-cont">
            <nav>
               <menu>
                  {datas.map((item, index) => {
                     return(
                        <li key={index}>
                           {/* <button onClick={e => {setActive(e)}}></button><span>{item.title}</span> */}
                           <button></button><span>{item.title}</span>
                        </li>
                     )
                  })}
               </menu>
            </nav>
         </div>
      </div>
   )
}
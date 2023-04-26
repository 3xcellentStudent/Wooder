import React from "react";
import { NavLink } from "react-router-dom";

import {useDispatch} from 'react-redux';
import {setIndex} from './store/indexSlice';

export default function Header(){

   const dispatch = useDispatch()

   React.useEffect(() => {
      const headerBtns = document.querySelectorAll('.lines-btn')

      headerBtns[2].addEventListener('click', () => {dispatch(setIndex(0))})
   }, [])

   function headerMenu(){
      document.querySelector('.navig').classList.toggle('active')
      document.querySelector('.header-burger').classList.toggle('active')
      document.querySelector('header h5').classList.toggle('active')
   }

   const datas = [
      {title: 'Home', url: '/'},
      {title: 'Design', url: '/design'},
      {title: 'Furniture', url: '/furniture'},
   ]

   const links = datas.map((item, index) => {return(<li key={`navig: ${index}`}><NavLink className='header lines-btn' to={item.url}>{item.title}
      <span className="btn-line"></span>
      <span className="btn-line"></span>
      <span className="btn-line"></span>
      <span className="btn-line"></span>
   </NavLink></li>)})

   return(
      <header>
         <h5>WP</h5>
         <nav className="navig">
            <menu>
               {links}
            </menu>
         </nav>
         <nav className="social">
            <menu>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
               <li><a href=""></a></li>
            </menu>
         </nav>
         <button onClick={() => headerMenu()} className="header-burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
         </button>
      </header>
   )
}
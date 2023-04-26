import React from "react";

import Smoothly from "../../plugins/smoothly";
import DescScroll from "../DesripComp/DescScroll";
import FurnitureSect from "./components/FurnitureSect";

import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setURL } from "../../store/urlSlice";
 
export default function FurniturePage(){

   let mainI = 0,
       lock = true

   const selector = useSelector(state => mainI = state.index.index),
         dispatch = useDispatch(),
   
         datas = [
            {title: 'Bathroom', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe itaque culpa earum officia nostrum. Deleniti tempore debitis eveniet sapiente!', 
            imgPath: [
               {img: 'Bathroom/first/1200-1200-line-solid-teak-column.webp', way: '/furniture-bathroom'},
               {img: 'Bathroom/second/1200-1200-coline-solid-teak-column.webp', way: '/furniture-bathroom'},
               {img: 'Bathroom/third/1200-1200-soho-solid-oak-bathroom-column.webp', way: '/furniture-bathroom'},
               {img: 'Bathroom/fourth/maia-bathroom-tallboy-storage-unit-056.50.339M_1_720x.webp', way: '/furniture-bathroom'},
            ]},
            {title: 'Bedroom', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe itaque culpa earum officia nostrum. Deleniti tempore debitis eveniet sapiente!', 
            imgPath: [
               {img: 'Bedroom/fourth/1200-1200-minimalys-solid-teak-wardrobe (1).webp', way: '/furniture-bedroom'},
               {img: 'Bedroom/second/1200-1200-minimalys-solid-teak-chest-of-drawers.webp', way: '/furniture-bedroom'},
               {img: 'Bedroom/fifth/1200-1200-circa-1-drawer-solid-teak-bedside-table.webp', way: '/furniture-bedroom'},
               {img: 'Bedroom/third/1200-1200-minimalys-solid-teak-wardrobe.webp', way: '/furniture-bedroom'},
            ]},
            {title: 'Hall', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe itaque culpa earum officia nostrum. Deleniti tempore debitis eveniet sapiente!', 
            imgPath: [
               {img: 'Hall/wall-cabinet/ninth/1200-1200-kwarto-solid-sheesham-wall-mounted-bookshelf.webp', way: '/furniture-hall'},
               {img: 'Hall/middle-cabinets/fifth/1200-1200-eden-solid-teak-bedside-table.webp', way: '/furniture-hall'},
               {img: 'Hall/big-cabinets/tenth/1200-1200-miho-tall-bookcase-in-solid-oak.webp', way: '/furniture-hall'},
               {img: 'Hall/small-tables/first/1200-1200-kilim-decorative-solid-teak-stool.webp', way: '/furniture-hall'},
            ]},
            {title: 'Kitchen', descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe itaque culpa earum officia nostrum. Deleniti tempore debitis eveniet sapiente!', 
            imgPath: [
               {img: 'Kitchen/pedestal/second/1200-1200-vintage-solid-teak-sideboard-165-cm.webp', way: '/furniture-kitchen'},
               {img: 'Kitchen/table/third/1200-1200-temis-solid-acacia-and-metal-table-seats-6-8.webp', way: '/furniture-kitchen'},
               {img: 'Kitchen/pedestal/fourth/1200-1200-coffee-tek-solid-teak-kitchen-dresser-120-cm.webp', way: '/furniture-kitchen'},
               {img: 'Kitchen/table/first/1200-1200-eden-solid-oak-table-seats-6-8.webp', way: '/furniture-kitchen'},
            ]},
         ]

   React.useEffect(() => {
      const container = document.querySelector('.smt-195-container')
      if(lock){
         lock = !lock
         setTimeout(() => {
            Smoothly('.smt-195-container', '', '.furniture-undChd-wrap', mainI, .6, 'ease-out', 1.5, true)
         }, 600)
      }

      return () => {
         container.onpointerdown = null
         container.onpointermove = null
         container.onpointerup = null
         container.onwheel = null
         dispatch(setURL("/furniture"))
      }
   }, [])

   return(
      <motion.div className="furniture-comp-wrap smt-195-wrapper smt-195-main-el"
      initial={{
         opacity: 0,
         y: (window.innerWidth / 4) * -1,
       }}
       animate={{
         opacity: 1,
         y: 0,
      }}
      exit={{
         opacity: 0,
         y: window.innerWidth / 4,
         transition: {duration: .2}
      }}
      transition={{duration: .6}}
      >
         <DescScroll title="Scroll" />
         <div className="furniture-comp-container smt-195-container smt-195-main-el">
            <div className="smt-195-child">
               <div className="furniture-undChd-wrap">
                  {datas.map((item, index) => {
                     return(
                        <FurnitureSect 
                        key={index} 
                        title={item.title} 
                        descr={item.descr} 
                        arr={item.imgPath} 
                        />
                     )
                  })}
               </div>
            </div>
         </div>
      </motion.div>
   )
}
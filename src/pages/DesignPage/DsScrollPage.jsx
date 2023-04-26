import React from "react";
import { useDispatch } from "react-redux"
import { setURL } from "../../store/urlSlice"

import Scroll3d from '../../plugins/3dScroll'
import { motion } from 'framer-motion';
import DescScroll from '../DesripComp/DescScroll';

import DsScrollFrames from "./components/DsScrollFrames";

export default function DsScrollPage(){

   const dispatch = useDispatch()

   React.useEffect(() => {
      const container = document.querySelector('.ds3d-frames-wrap')
      Scroll3d('.ds3d-frames-wrap', '.frame', -1000, 1.5)
      return () => {
         container.onpointerdown = null
         container.onpointermove = null
         container.onpointerup = null
         container.onwheel = null
         dispatch(setURL("/design"))
      }
   }, [])

   const datas = [
      { title: "Bedrooms", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
         imgSrc: [
         {img: 'Bedroom/postel-flabo-LR-1.jpg', clsName: 'left'},
         {img: 'Bedroom/1.masterbedroom.jpg.webp', clsName: 'right'},
         {img: 'Bedroom/Modern-bedroom.jpg', clsName: 'left'},
      ]},
      { title: "Bathrooms", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis nemo et aliquam eaque inventore.", 
         imgSrc: [
         {img: 'Bathroom/bathroom6.jpg', clsName: 'left'},
         {img: 'Bathroom/bathroom5.jpg', clsName: 'right'},
         {img: 'Bathroom/bathroom-toilet.jpg', clsName: 'left'},
      ]},
      { title: "Kitchens", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis nemo et aliquam eaque inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
         imgSrc: [
         {img: 'Kitchen/modern-kitchen-4.jpg', clsName: 'left'},
         {img: 'Kitchen/modern-kitchen-3.jpg', clsName: 'right'},
         {img: 'Kitchen/Modern-Kitchen-1.jpg', clsName: 'left'},
      ]},
      { title: "House Halls", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis nemo et aliquam eaque inventore.", 
         imgSrc: [
         {img: 'Hall/Modern-dark-hall-2.jpg', clsName: 'left'},
         {img: 'Hall/modern-living-hall-3.jpg', clsName: 'right'},
         {img: 'Hall/hall-dark-tones.jpg', clsName: 'left'},
      ]},
   ]

   return(
      <motion.div className="ds3d-main-wrap"
      initial={{
         x: (window.innerWidth / 4) * -1,
         scale: .8,
         opacity: 0,
       }}
       animate={{
         x: 0,
         scale: 1,
         opacity: 1
      }}
      exit={{
         x: window.innerWidth / 4,
         scale: .8,
         transition: {duration: .2},
         opacity: 0
      }}
      transition={{duration: .6}}
      >
         <DescScroll title="scroll down" />
         <div className="ds3d-wrapper">
            <div className="ds3d-container">
               <ul className="ds3d-frames-wrap">
                  {datas.map((item, index) => {
                     return(
                        <DsScrollFrames key={index} imgSrc={item.imgSrc} title={item.title} descr={item.descr} />
                     )
                  })}
               </ul>
            </div>
         </div>
      </motion.div>
   )
}
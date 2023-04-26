import React from "react";

import Smoothly from "../../plugins/smoothly";
import ObservEff from '../../plugins/ObservEff';

import Design from "./components/Design";
import Present from "./components/Present";
import Furniture from "./components/Furniture";
import About from "./components/About";

import { motion } from 'framer-motion';

export default function HomePage(){

   const ObsData = [
      {select: '.obsOpty', tresh: .5},
      {select: '.obsLeftS', tresh: .01},
      {select: '.obsRightS', tresh: .01},
      {select: '.obsBBoxDark', tresh: .4},
   ]

   React.useEffect(() => {
      const container = document.querySelector('.smt-195-container')
      setTimeout(() => {
         Smoothly('.smt-195-container', '', '', 0, .4, 'ease-out', 0, false)
      }, 600)
      if(navigator.maxTouchPoints === 0){window.onpointermove = e => {MouseMove(e)}}
      ObsData.forEach(item => {ObservEff(item.select, item.tresh)})
      return () => {
         if(navigator.maxTouchPoints === 0){
            container.onpointerdown = null
            container.onpointermove = null
            container.onpointerup = null
            container.onwheel = null
            window.onpointermove = null
         }
      }
   }, [])

   function UsScroll(){
      document.querySelector('.smt-195-child').style.overflow = 'hidden'
      const scrollElems = document.querySelectorAll('.smt-195-main-el')
      scrollElems.forEach(item=>{
         item.removeAttribute('style')
         item.removeAttribute('class')
      })
   }

   function MouseMove(e){
      let XVal = e.screenX / 10,
          YVal = e.screenY / 100
      const mainIndex = window.innerWidth / window.innerHeight
      const ImgPrlxB = document.querySelectorAll('.img-prlx-box')
      ImgPrlxB.forEach(item => {item.setAttribute('style', `left: -${(XVal / mainIndex / 10) / 2}%;top: -${YVal}%;`)})
      // document.querySelector('.bg-change-wrap').setAttribute('style', `background: linear-gradient(to left, #241200 ${XVal}%, #dd9c57 ${300 - XVal}%);`)
   }
   
   return(
      <motion.div className="smt-195-wrapper smt-195-main-el"
      initial={{
         opacity: 0,
         x: (window.innerWidth / 4) * -1,
       }}
       animate={{
         opacity: 1,
         x: 0,
      }}
      exit={{
         opacity: 0,
         x: window.innerWidth / 4,
         transition: {duration: .2},
      }}
      transition={{duration: .6}}
      >
         <div className="smt-195-container smt-195-main-el">
            <div className="smt-195-child">
               <Present/>
               <div className="bg-change-wrap">
                  <Design/>
                  <Furniture/>
                  <About/>
               </div>
            </div>
         </div>
      </motion.div>
   )
}
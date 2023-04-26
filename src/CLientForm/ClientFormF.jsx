import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

import EmailSVG from "./SVGs/EmailSVG";
import PersonSVG from "./SVGs/PersonSVG";

import { motion } from 'framer-motion';
import { useSelector } from "react-redux"

export default function ClientFormF(){
   let mainURL = "/",
       someIndex = 0

   const selector = useSelector(state => mainURL = state.url.url)

   const closeClient = useRef(),
         [Wrap, setWrap] = React.useState(null),
         [Cont, setCont] = React.useState(null),
         [Span, setSpan] = React.useState(null),
         [Inputs, setInputs] = React.useState(null),
         [SVGC, setSVGC] = React.useState(null),
         [wIndex, setWIndex] = React.useState(0)

   React.useEffect(() => {
      setWrap(document.querySelectorAll('.input-wrap'))
      setCont(document.querySelectorAll('.input-container'))
      setSpan(document.querySelectorAll('.span-sub-input'))
      setInputs(document.querySelectorAll('.input-input'))
      setSVGC(document.querySelectorAll('.svg-client'))
   }, [])

   function changes(e){
      Inputs.forEach((item, index) => {
         if(e.target === item){
            Wrap[index].classList.add('active')
            setWIndex(index)
         }
         else {
            Wrap[index].classList.remove('active')
         }
      })
   }

   function changeText(e){
      Inputs.forEach((item, index) => {
         if(item === e.target){
            if(item.value !== ''){
               Span[index].classList.add('hide')
               SVGC[index].classList.remove('active')
               Cont[index].classList.remove('active')
               if(SVGC[index] !== document.querySelector('.svg-client.email') && Cont[index] !== document.querySelector('.input-container.email')){
                  SVGC[index].classList.add('active')
                  Cont[index].classList.add('active')
               }
               else if(item.value.includes('@')){
                  SVGC[index].classList.add('active')
                  Cont[index].classList.add('active')
               }
            }
            else {
               Span[index].classList.remove('hide')
               SVGC[index].classList.remove('active')
               Cont[index].classList.remove('active')
            }
         }
      })
   }
   
   function Submiting(e){
      e.preventDefault()
      e.target.classList.add('submited')
   }

   return(
      <motion.div onClick={e => {changes(e)}} className="client-form-wrap"
      initial={{
         opacity: 0,
         y: window.innerHeight / 4,
       }}
       animate={{
         opacity: 1,
         y: 0,
      }}
      exit={{
         opacity: 0,
         y: window.innerHeight / 4,
         transition: {duration: .2}
      }}
      transition={{duration: .6}}
      >
         <NavLink ref={closeClient} to={mainURL} className="close-client"><span></span><span></span></NavLink>
         <form className="client-form-container">
            <div className="client-form-part">
               <div className="input-wrap">
               <span className="span-sub-input" >Name:</span>
                  <div className="input-container">
                     <input onInput={e => {changeText(e)}} className="input-input" type="text" />
                     <PersonSVG/>
                  </div>
               </div>
            </div>
            <div className="client-form-part">
               <div className="input-wrap">
               <span className="span-sub-input">E-mail:</span>
                  <div className="input-container email">
                     <input onInput={e => {changeText(e)}} className="input-input" type="text" />
                     <EmailSVG/>
                  </div>
               </div>
            </div>
            <div className="client-form-part">
               <div className="input-wrap">
                  <div className="input-container submit">
                     <input onClick={e => {Submiting(e)}} className="input-submit" type="submit" value="submit" />
                  </div>
               </div>
            </div>
         </form>
      </motion.div>
   )
}
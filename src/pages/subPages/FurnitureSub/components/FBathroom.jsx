import React from "react";
import FSect from '../common/FSect';
import Smoothly from '../../../../plugins/smoothly';
import DescScroll from "../../../DesripComp/DescScroll";
import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import { setURL } from "../../../../store/urlSlice";
import FSubPageBack from "../common/FSubPageBack";

export default function FBathroom(){

   let mainI = 0,
       lock = true

   const dispatch = useDispatch()

   const datas = [
            {title: 'Cabinet', price: "£319", descr: 'A clever, elegant design... This teak, wall-hanging column has many great attributes. The two large drawers at the bottom can accommodate your toiletries and linens etc... and the 3 top shelves are ideal for storing your accessories and hand towels. In short, this is a solid teak bathroom cabinet that beautifully combines style and practicality!', 
            details: [
                     {text: "Primary material : untreated Teak"},
                     {text: "Product dimensions: H 130 x W 30 x D 32 cm"},
                     {text: "Product weight: 25 kg"},
                     {text: "Number of packages : 1"},
                     {text: "Package dimensions : H 141 x W 42 x D 40 cm"},
                     {text: "Shelf dimensions: H 22,4 x W 26 x D 28 cm"},
                     {text: "Drawer Dimensions: H 19.5 x W 20.6 x D 23.8 cm"},
                     {text: "Complies with EN 14749: 2016 standards"},
                     {text: "Maximum load allowed: 40kg"},
                  ], 
            imgPath: [
               {img: 'Bathroom/first/1200-1200-line-solid-teak-column (2).webp'},
               {img: 'Bathroom/first/1200-1200-line-solid-teak-column (3).webp'},
               {img: 'Bathroom/first/1200-1200-line-solid-teak-column (4).webp'},
               {img: 'Bathroom/first/1200-1200-line-solid-teak-column.webp'},
            ]},
            {title: 'Coline', price: "£559", descr: 'The Coline solid teak tall cabinet Small in terms of floor space but large in terms of storage, this piece of furniture combines natural elegance with a style inspired by faraway lands. This beautifully designed tall cabinet allows you to organise your bathroom: you can store towels and bath mats in the bottom compartment, small accessories that you don\'t want left lying around can be tidied away in the drawer, and bottles and other beauty products can be kept in the top compartment. As for the central compartment, that\'s up to you, you can use it for bathroom linen or to display your favourite decorative objects.', 
            details: [
                     {text: "Primary material : untreated Teak"},
                     {text: "Product dimensions: H 190 x W 47 x D 40 cm"},
                     {text: "Product weight: 34 kg"},
                     {text: "Package dimensions : H 196 x W 52 x D 45 cm"},
                     {text: "Shelf, top and bottom levels covered with fine solid teak veneer"},
                     {text: "1 upper door"},
                     {text: "1 compartment"},
                     {text: "1 drawer"},
                     {text: "1 lower door opening onto 2 shelves"},
                  ], 
            imgPath: [
               {img: 'Bathroom/second/1200-1200-coline-solid-teak-column (1).webp'},
               {img: 'Bathroom/second/1200-1200-coline-solid-teak-column (2).webp'},
               {img: 'Bathroom/second/1200-1200-coline-solid-teak-column (4).webp'},
               {img: 'Bathroom/second/1200-1200-coline-solid-teak-column.webp'},
            ]},
            {title: 'Soho Oak', price: "£549", descr: 'The Soho Oak tall bathroom unit in oak takes up very little floor space but provides plenty of storage capacity: 1 cupboard closed by a door with a slatted front + 1 drawer + 3 compartments... Just what you need to store bathroom linen, accessories and beauty products in style!', 
            details: [
                     {text: "Primary material : oiled Oak"},
                     {text: "Product dimensions: H 180 x W 40 x D 35 cm"},
                     {text: "Product weight: 39.3 kg"},
                     {text: "Number of packages : 1"},
                     {text: "Package dimensions : H 170 x W 42 x D 39 cm"},
                     {text: "3 open compartments"},
                     {text: "1 drawer"},
                     {text: "1 swing doors opening onto 2 levels"},
                     {text: "Height of legs: 15 cm"},
                     {text: "Pre-assembled unit, base to be assembled"},
                  ], 
            imgPath: [
               {img: 'Bathroom/third/1200-1200-soho-solid-oak-bathroom-column (1).webp'},
               {img: 'Bathroom/third/1200-1200-soho-solid-oak-bathroom-column (2).webp'},
               {img: 'Bathroom/third/1200-1200-soho-solid-oak-bathroom-column (4).webp'},
               {img: 'Bathroom/third/1200-1200-soho-solid-oak-bathroom-column.webp'},
            ]},
            {title: 'Jonak', price: "£579", descr: 'The Jonak solid teak bathroom column perfectly complements the Jonak double vanity unit. Together they will give your bathroom some vintage Scandinavian spirit. It can blend well with your existing decor: the sleek lines and the blondness of its teak allows it to blend well with your decor. At the top, you can put towels, bottles of shampoo, shower gel etc. The middle shelf can host trinkets and the drawers, small essentials. The column can also be used in other rooms in your home to greate effect. If the Scandinavian style appeals to you, take the time to discover our entire Jonak collection.', 
            details: [
                     {text: "Primary material : untreated Teak"},
                     {text: "Product dimensions: H 180 x W 40 x D 35 cm"},
                     {text: "Product weight: 38 kg"},
                     {text: "Number of packages : 1"},
                     {text: "Package dimensions : H 171 x W 43 x D 38 cm"},
                     {text: "1 swing door"},
                     {text: "Removable feet"},
                     {text: "Assembled furniture, base to be assembled"},
                  ], 
            imgPath: [
               {img: 'Bathroom/fourth/maia-bathroom-tallboy-storage-unit-056.50.339M_1_720x.webp'},
               {img: 'Bathroom/fourth/maia-bathroom-tallboy-storage-unit-056.50.339M_2_720x.webp'},
               {img: 'Bathroom/fourth/maia-bathroom-tallboy-storage-unit-056.50.339M_3_720x.webp'},
               {img: 'Bathroom/fourth/maia-bathroom-tallboy-storage-unit-056.50.339M_4_720x.webp'},
            ]},
         ]

   const selector = useSelector(state => {mainI = state.index})

   React.useEffect(() => {
      if(lock){
         lock = !lock
         setTimeout(() => {
            Smoothly('.smt-195-container', '.p-container', '.furniture-undChd-wrap', mainI.index, .6, 'ease-out', 1.5, true)
         }, 600)
      }
      const container = document.querySelector('.smt-195-container')

      return () => {
         container.onpointerdown = null
         container.onpointermove = null
         container.onpointerup = null
         container.onwheel = null
         // window.onpointermove = null
         dispatch(setURL("/furniture-bathroom"))
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
         <DescScroll title="Scroll"/>
         <FSubPageBack/>
         <div className="furniture-comp-container smt-195-container smt-195-main-el">
            <div className="smt-195-child">
               <div className="furniture-undChd-wrap">
                  {datas.map((item, index) => {
                     return(
                        <FSect 
                        key={index} 
                        title={item.title} 
                        descr={item.descr} 
                        arr={item.imgPath}
                        details={item.details}
                        price={item.price}
                        />
                     )
                  })}
               </div>
            </div>
         </div>
      </motion.div>
   )
}
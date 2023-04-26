import React from "react";
import FSect from '../common/FSect';

import Smoothly from '../../../../plugins/smoothly';
import DescScroll from "../../../DesripComp/DescScroll";

import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import FSubPageBack from "../common/FSubPageBack";
import { setURL } from "../../../../store/urlSlice";

export default function FBathroom(){

   let mainI = 0,
   lock = true

   const dispatch = useDispatch(),
   
         selector = useSelector(state => {mainI = state.index}),

         datas = [
            {title: 'Esmée', price: "£279", descr: 'The Esmée solid walnut bedside table has numerous assets: we love the noble quality of the wood with its bronze highlights and beautiful graining, its vintage-style design and its generous storage capacity - a rare feature in small pieces of furniture of this sort. In fact, with 2 spacious drawers and an open compartment, it has plenty of space for everything you need to keep at hand in the evening or at night time.', 
            details: [
               {text: "Primary material : oiled Walnut"},
               {text: "Secondary material : Metal"},
               {text: "Product dimensions: H 42 x W 48 x D 35 cm"},
               {text: "Product weight: 14 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 41 x W 54 x D 42 cm"},
               {text: "Leg height: 10 cm"},
               {text: "Assembled furniture, base to be assembled"},
            ], 
            imgPath: [
               {img: 'Bedroom/fourth/1200-1200-minimalys-solid-teak-wardrobe (1).webp'},
               {img: 'Bedroom/fourth/1200-1200-esmee-solid-walnut-bedside-table.webp'},
               {img: 'Bedroom/fourth/1200-1200-esmee-solid-walnut-bedside-table (1).webp'},
               {img: 'Bedroom/fourth/1200-1200-esmee-solid-walnut-bedside-table (2).webp'},
            ]},
            {title: 'Minimalys', price: "£539", descr: 'A solid teak chest of 2 large drawers composed of joined teak slats. Very practical, the 2 drawers provide plenty of space to store your clothes. It can make a delightful to a bedroom with its simple, natural design. This product is part of the Minimalys collection: Tikamoon quality and style!', 
            details: [
               {text: "Primary material : varnished Teak"},
               {text: "Product dimensions: H 75 x W 110 x D 45 cm"},
               {text: "Product weight: 33 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 80 x W 113 x D 49 cm"},
               {text: "Drawers: H 27 x W 94 x D 41 cm"},
               {text: "Wooden runners"},
               {text: "Rope handles"},
            ], 
            imgPath: [
               {img: 'Bedroom/second/1200-1200-minimalys-solid-teak-chest-of-drawers (1).webp'},
               {img: 'Bedroom/second/1200-1200-minimalys-solid-teak-chest-of-drawers (2).webp'},
               {img: 'Bedroom/second/1200-1200-minimalys-solid-teak-chest-of-drawers (3).webp'},
               {img: 'Bedroom/second/1200-1200-minimalys-solid-teak-chest-of-drawers.webp'},
            ]},
            {title: 'Circa', price: "£299", descr: 'The Circa wall-mounted solid teak bedside table is distinguished by its clean lines, attractive wood and contemporary design. Ideal in a bedroom for organising everything you want to keep handy, it\'s also perfect in an office, dining room or hallway. Note the detailing of its top!', 
            details: [
               {text: "Primary material : varnished Acacia"},
               {text: "Secondary material : Metal"},
               {text: "Product dimensions: H 76 x W 175 x D 90 cm"},
               {text: "Product weight: 45 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 100 x W 185 x D 30 cm"},
               {text: "Can accommodate up to 8 guests"},
               {text: "Deconstructable"},
            ], 
            imgPath: [
               {img: 'Bedroom/fifth/1200-1200-circa-1-drawer-solid-teak-bedside-table (1).webp'},
               {img: 'Bedroom/fifth/1200-1200-circa-1-drawer-solid-teak-bedside-table (2).webp'},
               {img: 'Bedroom/fifth/1200-1200-circa-1-drawer-solid-teak-bedside-table (3).webp'},
               {img: 'Bedroom/fifth/1200-1200-circa-1-drawer-solid-teak-bedside-table.webp'},
            ]},
            {title: 'Big Minimalys', price: "£999", descr: 'A beautiful solid teak cupboard. Ideal for any type of storage in your home, with its 2 upper cupboards with 3 shelves, and 2 lower cupboards with 2 shelves. This quality piece of furniture with its gentle, natural colour tone, has a modern and simple design. Well suited to a number of different scenarios around the house, this piece can really enhance the home.', 
            details: [
               {text: "Primary material : untreated Teak"},
               {text: "Product dimensions: H 160 x W 110 x D 40 cm"},
               {text: "Product weight: 55 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 166 x W 113 x D 43 cm"},
               {text: "Cupboard 1 dimensions: H 28 x W 52 x D 36 cm"},
               {text: "-2 removable shelves"},
               {text: "cupboard 2 dimensions: H 21,5 x W 52 x D 36 cm"},
               {text: "-1 removable shelf"},
            ], 
            imgPath: [
               {img: 'Bedroom/third/1200-1200-minimalys-solid-teak-wardrobe (1).webp'},
               {img: 'Bedroom/third/1200-1200-minimalys-solid-teak-wardrobe (2).webp'},
               {img: 'Bedroom/third/1200-1200-minimalys-solid-teak-wardrobe (3).webp'},
               {img: 'Bedroom/third/1200-1200-minimalys-solid-teak-wardrobe.webp'},
            ]},
         ]

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
         dispatch(setURL("/furniture-bedroom"))
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
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
            {title: 'Twist collection', price: "£1699", descr: 'This sideboard is made from vintage, recycled teak from Indonesia. Ideal as a storage unit, it is equipped with 3 drawers and 2 hinged doors, opening onto one shelf. The sideboard can easily fit into the surrounds of a kitchen or living room, providing a great place for storing your dishes and table linens. It has an original design with Scandinavian classic styling. The richly grained teak can bring an authentic and warm touch to your home.', 
            details: [
               {text: "Primary material : varnished Teak"},
               {text: "Product dimensions: H 72 x W 165 x D 50 cm"},
               {text: "Product weight: 67 kg"},
               {text: "Number of packages : 1"},
               {text: "2 cupboard doors"},
               {text: "1 shelf"},
               {text: "3 drawers"},
            ], 
            imgPath: [
               {img: 'Kitchen/pedestal/second/1200-1200-vintage-solid-teak-sideboard-165-cm.webp'},
               {img: 'Kitchen/pedestal/second/1200-1200-vintage-solid-teak-sideboard-165-cm (1).webp'},
               {img: 'Kitchen/pedestal/second/1200-1200-vintage-solid-teak-sideboard-165-cm (2).webp'},
               {img: 'Kitchen/pedestal/second/1200-1200-vintage-solid-teak-sideboard-165-cm (3).webp'},
            ]},
            {title: 'Temis', price: "£699", descr: 'Temis - Solid acacia and metal Table. The industrial spirit of the Temis table, combines purity of lines and beautiful materials. The solid acacia surface is highly resistant to shocks and heat and has remarkable golden hue that can stand the test of time.', 
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
               {img: 'Kitchen/table/third/1200-1200-temis-solid-acacia-and-metal-table-seats-6-8.webp'},
               {img: 'Kitchen/table/third/1200-1200-temis-solid-acacia-and-metal-table-seats-6-8 (1).webp'},
               {img: 'Kitchen/table/third/1200-1200-temis-solid-acacia-and-metal-table-seats-6-8 (2).webp'},
               {img: 'Kitchen/table/third/1200-1200-temis-solid-acacia-and-metal-table-seats-6-8 (3).webp'},
            ]},
            {title: 'big cabinets', price: "£1499", descr: 'A solid teak kitchen dresser. With its simple, contemporary outline and compact design, this is a stylish and discrete storage option.',
            details: [
               {text: "Primary material : untreated Teak"},
               {text: "Product dimensions: H 233 x W 122 x D 50 cm"},
               {text: "Product weight: 100 kg"},
               {text: "Number of packages : 2"},
               {text: "Package dimensions 1 : H 136 x W 124 x D 39 cm"},
               {text: "Package dimensions 2 : H 105 x W 125 x D 55 cm"},
               {text: "Back and bottom panels in teak veneer"},
               {text: "instructions provided"},
            ], 
            imgPath: [
               {img: 'Kitchen/pedestal/fourth/1200-1200-coffee-tek-solid-teak-kitchen-dresser-120-cm.webp'},
               {img: 'Kitchen/pedestal/fourth/1200-1200-coffee-tek-solid-teak-kitchen-dresser-120-cm (1).webp'},
               {img: 'Kitchen/pedestal/fourth/1200-1200-coffee-tek-solid-teak-kitchen-dresser-120-cm (2).webp'},
               {img: 'Kitchen/pedestal/fourth/1200-1200-coffee-tek-solid-teak-kitchen-dresser-120-cm (3).webp'},
            ]},
            {title: 'Eden', price: "£679", descr: 'The centre-point of the living room or kitchen, the Eden solid oak table offers beautiful simplicity for all the family! We like its natural accents and its generous capacity (seats 6 to 8 people). Ideal combined with the Eden dresser, it will, however, blend just as well with your existing furniture: the simplicity of its lines and the softness of its colour make any design combination possible.', 
            details: [
               {text: "Primary material : oiled Oak"},
               {text: "Product dimensions: H 78 x W 180 x D 90 cm"},
               {text: "Product weight: 36 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 17 x W 186 x D 99 cm"},
               {text: "Can seat up to 8 people."},
               {text: "Removable"},
               {text: "Pre-assembled unit, legs to be assembled"},
            ], 
            imgPath: [
               {img: 'Kitchen/table/first/1200-1200-eden-solid-oak-table-seats-6-8.webp'},
               {img: 'Kitchen/table/first/1200-1200-eden-solid-oak-table-seats-6-8 (1).webp'},
               {img: 'Kitchen/table/first/1200-1200-eden-solid-oak-table-seats-6-8 (2).webp'},
               {img: 'Kitchen/table/first/1200-1200-eden-solid-oak-table-seats-6-8 (3).webp'},
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
         dispatch(setURL("/furniture-kitchen"))
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
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
            {title: 'Kwarto', price: "£429", descr: 'The wall-mounted Kwarto solid sheesham shelf unit can be adapted to your needs! You can remove the two box drawers to increase the number of shelves. We love the authenticity of the sheesham, with its rich colour tone and graining. Showcase items like books on the shelves or keep things more discrete in the drawers. You could use this shelf unit in the bathroom, where it is ideal for towels and toiletries. Or in the office or bedroom...',
            details: [
               {text: "Primary material : varnished Sheesham"},
               {text: "Product dimensions: H 150 x W 35 x D 30 cm"},
               {text: "Product weight: 37 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 157 x W 42 x D 37 cm"},
               {text: "Drawers: H 23.5 x W 26 x D 25.5 cm"},
               {text: "Shelves: H 26.5 x W 30 x D 29 cm"},
            ], 
            imgPath: [
               {img: 'Hall/wall-cabinet/ninth/1200-1200-kwarto-solid-sheesham-wall-mounted-bookshelf.webp'},
               {img: 'Hall/wall-cabinet/ninth/1200-1200-kwarto-solid-sheesham-wall-mounted-bookshelf (1).webp'},
               {img: 'Hall/wall-cabinet/ninth/1200-1200-kwarto-solid-sheesham-wall-mounted-bookshelf (2).webp'},
               {img: 'Hall/wall-cabinet/ninth/1200-1200-kwarto-solid-sheesham-wall-mounted-bookshelf (3).webp'},
            ]},
            {title: 'Eden', price: "£149", descr: 'The Eden solid teak bedside table looks right at home in any room in the house! Although it\'s ideal for use in the bedroom for books, glasses, an alarm clock and other objects that we like to have within easy reach, it makes an elegant console table in the dining room, the living room or in a spacious entrance hall: add a lovely vase of flowers, or a houseplant... and hey presto!', 
            details: [
               {text: "Primary material : untreated Teak"},
               {text: "Secondary material : Metal"},
               {text: "Product dimensions: H 70 x W 20 x D 35 cm"},
               {text: "Product weight: 10 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 79 x W 43 x D 30 cm"},
               {text: "1 drawer with wooden sliders"},
               {text: "1 shelf"},
            ], 
            imgPath: [
               {img: 'Hall/middle-cabinets/fifth/1200-1200-eden-solid-teak-bedside-table.webp'},
               {img: 'Hall/middle-cabinets/fifth/1200-1200-eden-solid-teak-bedside-table (1).webp'},
               {img: 'Hall/middle-cabinets/fifth/1200-1200-eden-solid-teak-bedside-table (2).webp'},
               {img: 'Hall/middle-cabinets/fifth/1200-1200-eden-solid-teak-bedside-table (3).webp'},
            ]},
            {title: 'Miho', price: "£1799", descr: 'The Miho tall solid teak bookcase is cleverly crafted in a beautiful wood. It has many advantages: it is modular and is composed of two parts that can be stacked in the arrangement that best suits the use you\'ve got in mind for it. The arrangement of the compartments can be changed and the drawers grouped closer together or, on the contrary, further apart. When placed against a wall, it becomes a bookcase, a storage unit or display case... or a movable partition to separate two spaces or to create a reading corner, for example, when it is set up in the middle of a room.', 
            details: [
               {text: "Primary material : untreated Teak"},
               {text: "Product dimensions: H 220 x W 120 x D 40 cm"},
               {text: "Product weight: 124.98 kg"},
               {text: "Number of packages : 2"},
               {text: "Package dimensions 1 : H 113 x W 125 x D 45 cm"},
               {text: "Package dimensions 2 : H 113 x W 125 x D 45 cm"},
            ], 
            imgPath: [
               {img: 'Hall/big-cabinets/tenth/1200-1200-miho-tall-bookcase-in-solid-oak.webp'},
               {img: 'Hall/big-cabinets/tenth/1200-1200-miho-tall-bookcase-in-solid-oak (1).webp'},
               {img: 'Hall/big-cabinets/tenth/1200-1200-miho-tall-bookcase-in-solid-oak (2).webp'},
               {img: 'Hall/big-cabinets/tenth/1200-1200-miho-tall-bookcase-in-solid-oak (3).webp'},
            ]},
            {title: 'Kilim', price: "£39", descr: 'The Kilim round teak stool offers all the fab features of a must-have home accessory! We love the driftwood which has been cradled by the waves, its curves and natural charm. Perfect as an occasional seat, it can also be used as a side table, pedestal table, plant stand or footrest.', 
            details: [
               {text: "Primary material : Teak"},
               {text: "Product dimensions: H 20 x W 30 x D 30 cm"},
               {text: "Product weight: 1.7 kg"},
               {text: "Number of packages : 1"},
               {text: "Package dimensions : H 25 x W 34 x D 34 cm"},
            ], 
            imgPath: [
               {img: 'Hall/small-tables/first/1200-1200-kilim-decorative-solid-teak-stool.webp'},
               {img: 'Hall/small-tables/first/1200-1200-kilim-decorative-solid-teak-stool (1).webp'},
               {img: 'Hall/small-tables/first/1200-1200-kilim-decorative-solid-teak-stool (2).webp'},
               {img: 'Hall/small-tables/first/1200-1200-kilim-decorative-solid-teak-stool (3).webp'},
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
         dispatch(setURL("/furniture-hall"))
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
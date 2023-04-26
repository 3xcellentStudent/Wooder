import React from "react";

export default function FAccord(props){

   const [slItem, setSlItem] = React.useState()

   function openSlide(e){
      e.preventDefault()
      const {target} = e
      
      console.log(target.getAttribute('class'))
      slItem.forEach(item => {if(item.getAttribute('class').includes('open') && item !== target) item.classList.remove('open')})
      target.classList.toggle('open')
   }

   React.useEffect(() => {
      setSlItem(document.querySelectorAll('.slides-item'))
   }, [])

   return(
      <li className="slides-item" onClick={e => openSlide(e)}>
         <div className="furniture-img">
            <img src={`images/subFur/${props.img}`} alt="furniture" />
         </div>
      </li>
   )
}
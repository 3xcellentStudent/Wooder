export default function Smoothly(select, nonEvents, childsCont, startPos, speed, timFunc, sens, mode){
   const container = document.querySelector(select),
         secElems = nonEvents !== '' ? document.querySelectorAll(nonEvents) : false
   let contArr = childsCont === '' ? container.children[0].children : document.querySelector(childsCont).children
   let pos = 0,
       diffY = 0,
       remDiffY = 0,
       coef = 1,
       count = 0,
       lastPos = 0,
       sum = container.children[0].clientHeight - window.innerHeight,
       firstT = 0

   sens > 1 ? coef = Math.abs(((window.innerWidth - window.innerHeight) / 1000) - sens) : sens = 1.2

   if(navigator.maxTouchPoints > 0){
      // let firstT = 0
      container.onpointerdown = e => {
         diffY = 0
         firstT = e.clientY
         if(secElems){
            if(e.target === secElems[count].children[0] || e.target === secElems[count].children[1]) return 
            else {calcTouch(e)}
         }
         else{calcTouch(e)}

         // diffY = 0
         // firstT = e.clientY
         // container.onpointermove = e => {
         //    diffY = Math.round(((firstT - e.clientY) * sens * coef) * -1)
         //    pos = diffY + lastPos
         //    Scrolling()
         // }
      }
      container.onpointerup = () => {
         if(mode === true){
            if(diffY < (contArr[count].clientHeight / (sens * coef)) * -1 && count < contArr.length - 1){
               lastPos -= contArr[count].clientHeight
               pos = lastPos
               count++
               remDiffY += pos
            }
            else if(diffY > contArr[count].clientHeight / (sens * coef) && count > 0){
               lastPos += contArr[count].clientHeight
               pos = lastPos
               count--
               remDiffY += pos
            }
            else{pos = lastPos}
         }
         else{lastPos = pos}
         container.onpointermove = null
         Scrolling()
      }
   }

   else{
      container.onwheel = e => {
         if(secElems){
            if(e.target === secElems[count].children[0] || e.target === secElems[count].children[1]) return 
            else {calcWheel(e)}
         }
         else{calcWheel(e)}
      }
   }

   function calcTouch(e){
      container.onpointermove = e => {
         diffY = Math.round(((firstT - e.clientY) * sens * coef) * -1)
         pos = diffY + lastPos
         Scrolling()
      }
   }

   function calcWheel(e){
      if(mode === true){
         if(e.deltaY > 0 && count < contArr.length - 1){
            count++
            lastPos -= contArr[count].clientHeight
         }
         else if(e.deltaY < 0 && count > 0){
            count--
            lastPos += contArr[count].clientHeight
         }
         pos = lastPos
      }
      else{pos += e.deltaY * -1}
      Scrolling()
   }

   if(startPos > 0){StartPos()}

   function StartPos(){
      for(let i = 0; i < startPos; i++){
         count = startPos
         lastPos -= contArr[i].clientHeight
      }
      pos = lastPos
      Scrolling()
   }

   function Scrolling(){
      if(pos > 0){pos = 0;remDiffY = 0}
      if(pos <= sum * -1){pos = (sum - 1) * -1;diffY = lastPos / (sens * coef)}
      container.setAttribute('style', `transform:translateY(${pos}px);transition: ${speed}s ${timFunc};`)
   }
}

// if(e.target !== secElems.children[0] && e.target !== secElems.children[1]){
//    console.log(e.target)
//    if(mode === true){
//       if(e.deltaY > 0 && count < contArr.length - 1){
//          count++
//          lastPos -= contArr[count].clientHeight
//       }
//       else if(e.deltaY < 0 && count > 0){
//          count--
//          lastPos += contArr[count].clientHeight
//       }
//       pos = lastPos
//    }
//    else{pos += e.deltaY * -1}
//    Scrolling()
// }




// if(mode === true){
//    if(e.deltaY > 0 && count < contArr.length - 1){
//       count++
//       lastPos -= contArr[count].clientHeight
//    }
//    else if(e.deltaY < 0 && count > 0){
//       count--
//       lastPos += contArr[count].clientHeight
//    }
//    pos = lastPos
// }
// else{pos += e.deltaY * -1}
// Scrolling()
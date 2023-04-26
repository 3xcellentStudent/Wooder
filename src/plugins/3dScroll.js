export default function Scroll3d(select, frames, zSpace, sens){
   if(sens < 1){sens = 1}
   const container = document.querySelector(select),
         $frames = document.querySelectorAll(frames)
   let zArr = [],
       helpArr = [],
       coef = Math.abs(((window.innerWidth - window.innerHeight) / 1000) - sens),
       lastPos = 0,
       curPos = 0,
       diffY = 0,
       remDiffY = 0,
       count = 0

   $frames.forEach((item, index) => {
      zArr.push(index * zSpace)
      helpArr.push(index * zSpace)
      item.setAttribute('style', `will-change: transform;transform: translateZ(${index * zSpace}px)`)
      lastPos = zArr[zArr.length - 1]
   })
   if(navigator.maxTouchPoints > 0){
      container.onpointerdown = e => {
         let firstT = e.clientY
         remDiffY = (zSpace * count) * -1

         container.onpointermove = e => {
            diffY = ((firstT - e.clientY) * (sens * 1.5 * coef)) * -1
            curPos = diffY + remDiffY
            Scrolling()
         }
      }
      container.onpointerup = () => {
         if(diffY > (zSpace / (sens * 1.5 * coef)) * -1 && count < zArr.length - 1){
            count++
            curPos = (zSpace * count) * -1
         }
         else if(diffY < zSpace / (sens * 1.5 * coef) && count > 0){
            count--
            curPos = (zSpace * count) * -1
         }
         else{curPos -= diffY}
         remDiffY += diffY
         diffY = 0
         container.onpointermove = null
         Scrolling()
      }
   }
   else{container.onwheel = e => {
      if(curPos < 0){curPos = 0}
      if(curPos < lastPos){curPos = lastPos * -1}
      if(e.deltaY > 0 && count < zArr.length - 1){
         count++
         remDiffY -= zArr[count]
         ScrEffects()
      }
      else if(e.deltaY < 0 && count > 0){
         count--
         remDiffY -= zArr[count]
         ScrEffects()
      }
      curPos = remDiffY
      Scrolling()
   }}
   function Scrolling(){
      zArr = []
      $frames.forEach((item, index) => {
         zArr.push((index * zSpace) + curPos)
         if(navigator.maxTouchPoints === 0){item.setAttribute('style', `will-change: transform;transform: translateZ(${zArr[index]}px)`)}
         else item.setAttribute('style', `will-change: transform;transform: translateZ(${zArr[index]}px);opacity:1;`)
      })
   }
   function ScrEffects(){
      $frames.forEach(item => {item.classList.remove('ScrEff')})
      $frames[count].classList.add('ScrEff')
   }ScrEffects()
}
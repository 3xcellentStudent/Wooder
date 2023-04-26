export default function Slid3rJS(selector, numOfShows, numSlides, allShows, trans, transTF, sens){
   const slider = document.querySelector('' + selector),
         slides = [],
         div = document.createElement('div'),
         margins = {
      marL: 0,
      marR: 0,
      marT: 0,
      marB: 0,
      clHMax:0,
      clWMax:0,
         },
         pos = {
      itemPos: 0,
      minItemPos: 0,
      maxItemPos: slides.length * margins.marL + margins.marR + margins.clWMax,
         }

   let index = 1,
       mainFormula = 0

   slider.childNodes.forEach(item => {if(item.nodeType === Node.ELEMENT_NODE){slides.push(item)}})


   ;(() =>{
      div.setAttribute('class', `SlIdEr-JS-id-${Math.round(Math.random() * 100)}`)
      div.setAttribute('style', 'display:flex;position:absolute;min-width:100%;min-height:100%;left:0;')


      slider.insertAdjacentElement('afterbegin', div)

      const btnPrev = document.createElement('button'),
            btnNext = document.createElement('button')

      btnPrev.setAttribute('class', 'btn-prev-SlIdEr-JS')
      btnNext.setAttribute('class', 'btn-next-SlIdEr-JS')

      slider.insertAdjacentElement('beforeend', btnPrev)
      slider.insertAdjacentElement('beforeend', btnNext)

      btnPrev.addEventListener('click', () => {if(index > 1){BtnPrevFunc()}})
      btnNext.addEventListener('click', () => {if(index < slides.length - degree - multiple){BtnNextFunc()}})
      
      const marginsProt = {
         marLArr: [],
         marRArr: [],
         marTArr: [],
         marBArr: [],
         clHMaxArr: [],
         clWMaxArr: [],
      }

      slides.map(item => {
         div.append(item)
         item.style.transition = `${trans} ${transTF}`
         item.style.left = `${pos.itemPos}px`

         marginsProt.marLArr.push(+window.getComputedStyle(item).marginLeft.replace('px', ''))
         marginsProt.marRArr.push(+window.getComputedStyle(item).marginRight.replace('px', ''))
         marginsProt.marTArr.push(+window.getComputedStyle(item).marginTop.replace('px', ''))
         marginsProt.marBArr.push(+window.getComputedStyle(item).marginBottom.replace('px', ''))
         marginsProt.clHMaxArr.push(+window.getComputedStyle(item).height.replace('px', ''))
         marginsProt.clWMaxArr.push(+window.getComputedStyle(item).width.replace('px', ''))

         margins.marL = Math.max.apply(null, marginsProt.marLArr)
         margins.marR = Math.max.apply(null, marginsProt.marRArr)
         margins.marT = Math.max.apply(null, marginsProt.marTArr)
         margins.marB = Math.max.apply(null, marginsProt.marBArr)
         margins.clHMax = Math.max.apply(null, marginsProt.clHMaxArr)
         margins.clWMax = Math.max.apply(null, marginsProt.clWMaxArr)
      })
      
      mainFormula = margins.clWMax + margins.marL + margins.marR

      if(allShows === false){
         slider.setAttribute('style', `min-height:${margins.clHMax}px;width:${mainFormula * numOfShows}px;`)
         if(slider.clientWidth >= numOfShows * (margins.clWMax + margins.marL + margins.marR)){
            pos.minItemPos = (slider.clientWidth - margins.clWMax * numOfShows) / 2 - margins.marL * numOfShows
            div.style.left = `${pos.minItemPos}px`
         }
      }
      else {
         numOfShows = Math.floor(slider.clientWidth / (margins.clWMax + margins.marL + margins.marR))
         slider.setAttribute('style', `min-height:${margins.clHMax}px;width:100%;`)
      }
   })();


   let degree = 0,
       multiple = 0

   ;(() => {
      if(numOfShows > numSlides){degree = numOfShows - numSlides}
      else if(numOfShows === numSlides && numOfShows / 3 === Math.floor(numOfShows / 3)){
         multiple++
         degree = numOfShows - multiple
      }
      else {degree = numSlides - numOfShows}
   })();
   
   function BtnPrevFunc(){
      index - multiple > 0 ? pos.itemPos += mainFormula * numSlides : pos.itemPos += mainFormula
      slides.forEach(item => {item.style.left = `${pos.itemPos}px`})
      index -= numSlides - multiple
   }
   function BtnNextFunc(){
      index < slides.length - degree - multiple ? pos.itemPos -= mainFormula * numSlides : pos.itemPos -= mainFormula
      slides.forEach(item => {item.style.left = `${pos.itemPos}px`})
      index += numSlides - multiple
   };

   let mouseDown = 0,
       mouseDiff = 0

   window.onpointerdown = e => {
      mouseDown = e.clientX
      mouseDiff = 0
      slider.onpointermove = e => {
         e.preventDefault()
         mouseDiff = (mouseDown - e.clientX) * -1
         slides.forEach(item => {item.setAttribute('style', `left:${pos.itemPos + mouseDiff}px;transition:${trans / 2 / sens}s linear;`)})
      }
   }
   window.onpointerup = () => {
      if(index < slides.length - degree - multiple && mouseDiff < (margins.clWMax / sens) * -1){
         pos.itemPos -= (margins.clWMax + margins.marL + margins.marR) * numSlides
         index += numSlides - multiple
      }
      else if(index > 1 && mouseDiff >= margins.clWMax / sens){
         index -= numSlides - multiple
         pos.itemPos += (margins.clWMax + margins.marL + margins.marR) * numSlides
      }
      slides.forEach(item => {item.setAttribute('style', `left:${pos.itemPos}px;transition:${trans}s ${transTF}`)})
      slider.onpointermove = null
   }
}
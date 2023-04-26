export default function ObservEff(select, thresh){
   if(window.innerWidth > 1024){
      function onEntry(entry) {
         entry.forEach(change => {
            change.isIntersecting ? change.target.classList.add('Obs-eff') : change.target.classList.remove('Obs-eff')
         });
      }
      const options = {threshold: thresh}
      const observer = new IntersectionObserver(onEntry, options)
      const myArr = []
      document.querySelectorAll(select).forEach(item => {myArr.push(item)})
      for(let el of myArr){
         observer.observe(el)
      }
   }
}
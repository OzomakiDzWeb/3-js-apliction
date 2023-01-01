const keys=document.querySelectorAll('.key')
const sounds=document.querySelectorAll('audio')
const bobo=document.querySelector('.bobo')
keys.forEach((e,idx)=>{
     e.addEventListener('click',()=>{
          e.classList.add('playing')
         sounds[idx].play()
         bobo.classList.add('visibl')
         setTimeout(()=>{
          e.classList.remove('playing')
          bobo.classList.remove('visibl')
         },500)
         
     })
})
window.addEventListener('keydown',(e)=>{
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
     const playing=document.querySelector(`div[data-key="${e.keyCode}"]`)
     playing.classList.add('playing')
     audio.play()
     bobo.classList.add('visibl')
     setTimeout(()=>{
          playing.classList.remove('playing')
          bobo.classList.remove('visibl')
     },500)
     
     
     
    
})




const countainer=document.querySelectorAll('.box')
const bobo=document.querySelector('.bobo')
const btn=document.querySelector('button')
btn.addEventListener('click',()=>{
     location.reload()
})

countainer.forEach((e)=>{
     let str='012456789abcdef'
let color=''
for(let i=0;i<4;i++){
     let randomstr=Math.floor(Math.random()*str.length )
     color +=str.substring(randomstr,randomstr+1)
     
} 
e.style.backgroundColor=`#${color}`
e.innerHTML=`#${color}`
bobo.style.backgroundColor=`#${color}`
})






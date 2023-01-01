const second=document.querySelector('.second')
const minit=document.querySelector('.minit')
const hours=document.querySelector('.hours')
const dat=document.querySelector('.dat')
const bobo=document.querySelector('.bobo')

const go=()=>{
     setInterval(()=>{
       let time=new Date(),
            sec=time.getSeconds(),
            min=time.getMinutes(),
            hour=time.getHours(),
            jourWeek=time.getDay(),
            jourM=time.getDate(),
            month=time.getMonth(),
            y=time.getFullYear();
const j=['Su','Mo','Tu','We','Th','Fr','Sa'],
      m=['january','february','March','Apil','May','June','july','August','September','Octeber','November','December'] ; 
      if(sec<10){
          second.innerHTML='0'+sec  
      }else{

           second.innerHTML=sec
      }
      if(min<10){
          minit.innerHTML='0'+min  
      }else{

          minit.innerHTML=min +":"
      }
      hours.innerHTML=hour +":" 
      //////////////////////
      dat.innerHTML=`${j[jourWeek]} /${jourM} ${m[month]}/ ${y}`
        ///////////////////
        if(sec%2==0){
          bobo.style.display='none'
        }else{
          bobo.style.display='flex'
        }
     },1000)
}
go()







  
var menu = document.querySelector("#nav-prt2 i")
 var full = document.querySelector("#full-scr-nav")
 var flag =0
 menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top = "0%"
    document.querySelector("#nav h2").style.color = "#222"
    document.querySelector("#nav h3").style.color = "#222"
    document.querySelector("#nav i").style.color = "#222"
    flag=1
    }

    else{
        full.style.top = "-100%"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flag=0
    }
   
 })

 var t1= gsap.timeline()
t1.from("#page1 h1",{
    y:60,
    duration:0.6,
    opacity:0
 })
 .from("#page1 h2",{
   y:50,
   duration:0.5,
   opacity:0,
   delay: "-0.2"
})
.from("#page1 h3",{
   y:50,
   duration:0.5,
   opacity:0,
   delay: "-0.2"
})

gsap.to("#page2 img",{
   scale:2,
   scrollTrigger:{
      scrollTrigger:"#page2 img",
      scroller:"body",
      start:"top 0",
      scrub:4
   }
})
gsap.to("#page2 h1",{
   rotateX:-5,
   scrollTrigger:{
      trigger:"#page2 h1",
      scroller:"body",
      scrub:1
   }
})
var slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1")
slide1h1.forEach(function(elem){
   gsap.to(elem,{
      Transform:'translateX(-100%)',
      duration:4,
      scrollTrigger:{
         trigger:"#page6",
         scroller:"body",
         scrub:3
      }
   })
})
var slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1 h1")
slide2h1.forEach(function(elem){
   gsap.to(elem,{
      Transform:'translateX(0%)',
      duration:4,
      scrollTrigger:{
         trigger:"#page6",
         scroller:"body",
         scrub:3
      }
   })
})

document.querySelector("#element1").addEventListener("mousemove",function(dets){
   document.querySelector("#element1 img").style.opacity=1
   document.querySelector("#element1 img").style.left=`${dets.x}px`
   document.querySelector("#element1 img").style.top=`${dets.y -530}px`
})
document.querySelector("#element1").addEventListener("mouseleave",function(dets){
   document.querySelector("#element1 img").style.opacity=0
})

document.querySelector("#element2").addEventListener("mousemove",function(dets){
   document.querySelector("#element2 img").style.opacity=1
   document.querySelector("#element2 img").style.left=`${dets.x}px`
   document.querySelector("#element2 img").style.top=`${dets.y -530}px`
})
document.querySelector("#element2").addEventListener("mouseleave",function(dets){
   document.querySelector("#element2 img").style.opacity=0
})

gsap.to("#page8 img",{
   scale:0.8,
   scrollTrigger:{
      scrollTrigger:"#page8 img",
      scroller:"body",
      start:"top 5",
      scrub:1
   }
})
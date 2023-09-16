var a=document.querySelector(".a")
var b=document.querySelector("i")

a.addEventListener("dblclick",function(){
    b.style.transform='translate(-50%,-50%) scale(1)'

    setTimeout(function(){
b.style.transform='translate(-50%,-50%) scale(0)'
    },1000)
})
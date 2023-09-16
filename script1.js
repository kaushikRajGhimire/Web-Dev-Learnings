var a=document.querySelector("h5")
var b=document.querySelector(".d")
var c=document.querySelector(".b")
var flag=0;
b.addEventListener("click",function(){
    if(flag==0){
    a.innerHTML="Friends"
    a.style.color="green"
    b.innerHTML="Remove"
    flag=1
    }
    else
    {
        a.innerHTML="Stranger"
        a.style.color="brown"
        b.innerHTML="Add Friend"
        flag=0
    }
})
// c.addEventListener("click",function(){
    
// })
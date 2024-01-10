var tog=document.querySelector(".tog")
var menu=document.querySelector(".menu")
var link=document.querySelectorAll('.link')
link.forEach(function(item){
    item.addEventListener('click',function(e){
        if(menu.classList.contains('active')){
            menu.classList.remove("active")
        }
    })
})
var arrow=document.querySelector(".arrow")
var navbar=document.querySelector(".navbar")
tog.addEventListener('click',function(){
    menu.classList.toggle('active')

})

var span=document.querySelector("#year")
window.addEventListener("DOMContentLoaded",function(){
    span.innerHTML=new Date().getFullYear()
})
window.addEventListener("scroll",function(){
    var winh=window.pageYOffset
    if(winh>165){
        navbar.classList.add('active')
    
    }
    else{
        navbar.classList.remove('active')
    }

})
window.addEventListener("scroll",function(){
    var winh=window.pageYOffset
    if(winh>250){
        arrow.classList.add("see")
    }
    else{
        arrow.classList.remove("see")
    }
})


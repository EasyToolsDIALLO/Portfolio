const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("close")
})

//hide style switcher on scroll
window.addEventListener("scroll", ()=>{
    if(!document.querySelector(".style-switcher").classList.contains("close")){
        document.querySelector(".style-switcher").classList.toggle("close")
    }
})



    /*const btn = document.querySelector(".style-switcher .colors .color-1")
    const btn1 = document.querySelector(".style-switcher .colors .color-2")
    const btn2 = document.querySelector(".style-switcher .colors .color-3")
    const btn3 = document.querySelector(".style-switcher .colors .color-4")
    const btn4 = document.querySelector(".style-switcher .colors .color-5")
    console.log("click")
    btn.addEventListener("click", ()=>{
        const change = document.querySelector(".alternate1-style")
        change.toggleAttribute("disabled")
    })
    
    btn1.addEventListener("click", ()=>{
        const change = document.querySelector(".alternate2-style")
        change.toggleAttribute("disabled")
    })
    
    btn2.addEventListener("click", ()=>{
        const change = document.querySelector(".alternate3-style")
        change.toggleAttribute("disabled")
    })
    
    btn3.addEventListener("click", ()=>{
        const change = document.querySelector(".alternate4-style")
        change.toggleAttribute("disabled")
    })
    
    btn4.addEventListener("click", ()=>{
        const change = document.querySelector(".alternate5-style")
        change.toggleAttribute("disabled")
    })*/

const boutons = document.querySelectorAll(".style-switcher .colors .color")
const change1 = document.querySelector(".alternate1-style")
const change2 = document.querySelector(".alternate2-style")
const change3 = document.querySelector(".alternate5-style")
for(var i=0;i<liens.length;i++){
    switch(i){
        case 0: 
            boutons[0].addEventListener("click",()=>{
                change1.removeAttribute("disabled")
                change3.setAttribute("disabled","")
                change2.setAttribute("disabled","")
                
                
            })
            break;
        
        case 1: 
            boutons[1].addEventListener("click",()=>{
                change3.removeAttribute("disabled")
                change1.setAttribute("disabled","")
                change2.setAttribute("disabled","")
               
            })
            break;
        
        case 2: 
        boutons[2].addEventListener("click",()=>{
            change2.removeAttribute("disabled")
            change3.setAttribute("disabled","")
            change1.setAttribute("disabled","")
            
        })
        break;
        
    }
}





//Background

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.querySelector("body").classList.toggle("dark")
})

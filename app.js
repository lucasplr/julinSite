const nav = document.querySelector(".nav")
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const header = document.querySelector(".header")

btn.addEventListener("click", () => {
    if(nav.classList.contains("nav-show")){
        nav.classList.remove("nav-show")
    }else{
        nav.classList.add("nav-show")
    }
})


const headerWidth = header.getBoundingClientRect().width
console.log(headerWidth)
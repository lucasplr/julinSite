const dias = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]
const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]
let darkA = []


const nav = document.querySelector(".nav")
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const header = document.querySelector(".header")
const dark = document.querySelector(".dark")
const body = document.querySelector(".body")
const footer = document.querySelector(".footer")
const switchV = document.querySelector(".switch")
const diaText = document.querySelector(".dia")

const colorText = document.querySelectorAll(".textA")

const items = document.querySelector(".time")

const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

let contador = 0

nextBtn.addEventListener("click", () => {
    contador++
    carousel()
})

prevBtn.addEventListener("click", () => {
    contador--
    carousel()
})

function carousel(){
    if (contador < slides.length - 1){
        nextBtn.style.display = "block"
    }else{
        nextBtn.style.display = "none"
    }

    if(contador > 0){
        prevBtn.style.display = "block"
    }else{
        prevBtn.style.display = "none"
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${contador * 100}%)`
    })
}
prevBtn.style.display = "none"


btn.addEventListener("click", () => {
    if(nav.classList.contains("nav-show")){
        nav.classList.remove("nav-show")
    }else{
        nav.classList.add("nav-show")
    }
    if (switchV.classList.contains("show-switch")){
        switchV.classList.remove("show-switch")
    }else{
        switchV.classList.add("show-switch")
    }

})





function getTime(){
    let month = new Date().getMonth()
    let daySem = new Date().getDay()
    let day = new Date().getDate()
    let hour = new Date().getHours()
    let minutes = new Date().getMinutes()

    if (day < 10){
        day = "0" + day
    }else{
        day = day
    }
    
    if (minutes < 10){
        minutes = "0" +  minutes
    }else{
       minutes =  minutes
    }
    
    if (hour < 10){
        hour =  "0" + hour
    }else{
       hour = hour
    }
    


  items.innerHTML = `${dias[daySem]}, ${day} de ${mes[month]}, ${hour}:${minutes}`
}



  let time = setInterval(getTime, 1000)





const headerWidth = header.getBoundingClientRect().width

dark.addEventListener("click", () => {
    if(switchV.classList.contains("slide")){
        switchV.classList.remove("slide")
    }else{
        switchV.classList.add("slide")
    }
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode")
    removeFromLocalStorage("dark-mode")
    }else{
    body.classList.add("dark-mode")
    addToLocalStorage("dark-mode")
    }
    if (header.classList.contains("dark-red") && nav.classList.contains("dark-red") && footer.classList.contains("dark-red")){
        header.classList.remove("dark-red")
        nav.classList.remove("dark-red")
        footer.classList.remove("dark-red")
        footer.classList.remove("white-text")
        diaText.classList.remove("white-text")
        colorText.forEach((color) => {
        color.classList.remove("white-text")
        })
    }else{
        header.classList.add("dark-red")
        nav.classList.add("dark-red")
        footer.classList.add("dark-red")
        footer.classList.add("white-text")
        diaText.classList.add("white-text")
        colorText.forEach((color) => {
            color.classList.add("white-text")
        
        })
    }
})


window.addEventListener("DOMContentLoaded", () => {
    let items = getLocalStorage()

   if(items == "dark-mode"){
    header.classList.add("dark-red")
    nav.classList.add("dark-red")
    footer.classList.add("dark-red")
    body.classList.add("dark-mode")
    footer.classList.add("white-text")
    diaText.classList.add("white-text")
    colorText.forEach((color) => {
        color.classList.add("white-text")
    
    })
   }
})



function addToLocalStorage(value){
    const grocery = value

    let items = getLocalStorage();
    console.log(items[0])
    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))

}

function removeFromLocalStorage(value){
    let items = getLocalStorage()

    items = items.filter((item) => {
        if (item.value === value){ //Se é um item diferente não é removido, se o id é igual, ou seja, o item que quero deletear, o mesmo é filtrado
            return item
        }
        console.log(items[0])
    })
    localStorage.setItem("list", JSON.stringify(items))
}

function getLocalStorage(){
        return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]
}
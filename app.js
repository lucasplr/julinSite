const dias = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]
const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

const nav = document.querySelector(".nav")
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const header = document.querySelector(".header")
const dark = document.querySelector(".dark")
const body = document.querySelector(".body")
const footer = document.querySelector(".footer")
const switchV = document.querySelector(".switch")

const items = document.querySelector(".time")


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
  console.log(`${dias[daySem]}, ${day} de ${mes[month]}, ${hour}:${minutes}`)
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
    }else{
    body.classList.add("dark-mode")
    }
    if (header.classList.contains("dark-red") && nav.classList.contains("dark-red") && footer.classList.contains("dark-red")){
        header.classList.remove("dark-red")
        nav.classList.remove("dark-red")
        footer.classList.remove("dark-red")
    }else{
        header.classList.add("dark-red")
        nav.classList.add("dark-red")
        footer.classList.add("dark-red")
    }
})


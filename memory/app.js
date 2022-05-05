const cardArray = [
    {
        name: "fries",
        img: 'images/1.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images/2.jpg',
    },
    {
        name: "hotdog",
        img: 'images/3.jpg',
    },
    {
        name: "ice-cream",
        img: 'images/4.jpg',
    },
    {
        name: "milkshake",
        img: 'images/5.jpg',
    },
    {
        name: "pizza",
        img: 'images/6.jpg',
    },
    {
        name: "fries",
        img: 'images/7.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images/8.jpg',
    },
    {
        name: "fries",
        img: 'images/1.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images/2.jpg',
    },
    {
        name: "hotdog",
        img: 'images/3.jpg',
    },
    {
        name: "ice-cream",
        img: 'images/4.jpg',
    },
    {
        name: "milkshake",
        img: 'images/5.jpg',
    },
    {
        name: "pizza",
        img: 'images/6.jpg',
    },
    {
        name: "fries",
        img: 'images/7.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images/8.jpg',
    }
]
const cardArray2 = [
    {
        name: "fries",
        img: 'images2/1.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images2/2.jpg',
    },
    {
        name: "hotdog",
        img: 'images2/3.jpg',
    },
    {
        name: "ice-cream",
        img: 'images2/4.jpg',
    },
    {
        name: "milkshake",
        img: 'images2/5.jpg',
    },
    {
        name: "pizza",
        img: 'images2/6.jpg',
    },
    {
        name: "fries",
        img: 'images2/7.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images2/8.jpg',
    },
    {
        name: "fries",
        img: 'images2/1.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images2/2.jpg',
    },
    {
        name: "hotdog",
        img: 'images2/3.jpg',
    },
    {
        name: "ice-cream",
        img: 'images2/4.jpg',
    },
    {
        name: "milkshake",
        img: 'images2/5.jpg',
    },
    {
        name: "pizza",
        img: 'images2/6.jpg',
    },
    {
        name: "fries",
        img: 'images2/7.jpg',
    },
    {
        name: "cheeseburger",
        img: 'images2/8.jpg',
    }
]

const dias = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]
const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

const grid = document.querySelector(".grid")
const result = document.querySelector(".result")
const reultText = document.querySelector(".resultText")
const reset = document.querySelector(".reset")
const header = document.querySelector(".header")
const dark = document.querySelector(".dark")
const body = document.querySelector(".body")
const footer = document.querySelector(".footer")
const switchV = document.querySelector(".switch")
let count = document.querySelector(".counter")
const diaText = document.querySelector(".dia")

const colorText = document.querySelectorAll(".textA")


const items = document.querySelector(".time")

const headerWidth = header.getBoundingClientRect().width

counter = 0
let chosenCards = []
let chosenCardsIds = []
const cardsWon = []

cardArray.sort(() => 0.5 - Math.random())


// function to create the grid with random positions of the images
function boardCreator () {
    cardArray.forEach((card, index) => {
        const cardA = document.createElement('img')
        cardA.setAttribute('src', 'images/blank.png')
        cardA.setAttribute('id', 'this')
        cardA.classList.add("this")
        cardA.setAttribute('data-id', index)
        cardA.addEventListener("click", flipCard)
        grid.appendChild(cardA)

    })
}

function boardCreatorBig () {
    cardArray2.forEach((card, index) => {
        const cardA = document.createElement('img')
        cardA.setAttribute('src', 'images/blank.png')
        cardA.setAttribute('id', 'this')
        cardA.classList.add("this")
        cardA.setAttribute('data-id', index)
        cardA.addEventListener("click", flipCard)
        grid.appendChild(cardA)

    })
}


function checkMatch (){
    const cards = document.querySelectorAll('#this')
    if (chosenCards[0] === chosenCards[1] && chosenCardsIds[0] !== chosenCardsIds[1]){
        setTimeout(changeText, 500)
        cards[chosenCardsIds[0]].classList.add("img-border")
        cards[chosenCardsIds[1]].classList.add("img-border")
        cards[chosenCardsIds[0]].removeEventListener('click', flipCard)
        cards[chosenCardsIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(chosenCards)
    }else{
        cards[chosenCardsIds[0]].setAttribute('src', 'images/blank.png')
        cards[chosenCardsIds[0]].classList.remove("flip")
        cards[chosenCardsIds[1]].setAttribute('src', 'images/blank.png')
        cards[chosenCardsIds[1]].classList.remove("flip")
    }
    counter++
    chosenCards = []
    chosenCardsIds = []
    reultText.textContent = ""
    count.textContent = `${counter} tentativa(s)`
    if (cardsWon.length === (cardArray.length)/2){
        count.textContent = `Precisou de ${counter} tentativas`
    }
    

}

function changeText(){
    reultText.textContent = "acertou"
}

function flipCard(e){
    let tg = e.currentTarget.dataset.id
    chosenCards.push(cardArray[tg].img)
    chosenCardsIds.push(tg)
    e.currentTarget.setAttribute('src', cardArray[tg].img)
    e.currentTarget.classList.add("flip")

    if(chosenCards.length === 2){
        setTimeout(checkMatch, 500)

        
    }
}

    boardCreator()





const nav = document.querySelector(".nav")
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

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



reset.addEventListener("click", () => {
    window.location.reload(true)
    
})

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
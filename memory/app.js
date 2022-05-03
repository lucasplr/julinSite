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

const grid = document.querySelector(".grid")
const result = document.querySelector(".result")
const reultText = document.querySelector(".resultText")

const header = document.querySelector(".header")

const headerWidth = header.getBoundingClientRect().width
console.log(headerWidth)

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
        cards[chosenCardsIds[0]].setAttribute('src', 'images/white.png')
        cards[chosenCardsIds[0]].classList.add("img-border")
        cards[chosenCardsIds[1]].setAttribute('src', 'images/white.png')
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
    if (cardsWon.length === (cardArray.length)/2){
        result.textContent = `Precisou de ${counter} tentativas`
    }

}

function changeText(){
    reultText.textContent = "acertou"
}

function flipCard(e){
    let tg = e.currentTarget.dataset.id
    chosenCards.push(cardArray[tg].name)
    chosenCardsIds.push(tg)
    e.currentTarget.setAttribute('src', cardArray[tg].img)
    e.currentTarget.classList.add("flip")

    console.log(e.currentTarget)
    if(chosenCards.length === 2){
        setTimeout(checkMatch, 500)

        
    }
}

if(headerWidth < 700){
    boardCreator()
}else{
    boardCreatorBig()
}







const nav = document.querySelector(".nav")
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

btn.addEventListener("click", () => {
    if(nav.classList.contains("nav-show")){
        nav.classList.remove("nav-show")
    }else{
        nav.classList.add("nav-show")
    }
})


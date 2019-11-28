const contentContainer = document.getElementById('contentContainer')

const decks = {
  easy: ['bunny', 'cat', 'hamster'],
  medium: ['bunny', 'cat', 'hamster', 'panda', 'seal'],
  advance: ['bunny', 'cat', 'hamster', 'panda', 'seal', 'turtle']
}

function createDeck (difficulty) {
  let deck = []
  let deckHTML = ''
  for (const card of decks[difficulty]) {
    deck.push(card)
    deck.push(card)
  }
  shuffle(deck)
  for (const card of deck) {
    deckHTML += `<div class="card ${card} backCard"></div>`
  }
  contentContainer.innerHTML = deckHTML
}

const easy = document.getElementById('easy')

function easyDeck () {
  createDeck('easy')
}
const medium = document.getElementById('medium')

function mediumDeck () {
  createDeck('medium')
}
const advance = document.getElementById('advance')

function advanceDeck () {
  createDeck('advance')
}
easy.addEventListener('click', easyDeck)
medium.addEventListener('click', mediumDeck)
advance.addEventListener('click', advanceDeck)

// based of Steve Griffith array shuffle
const shuffle = function (array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    const temp = array[i]
    const pos = Math.floor(Math.random() * length)
    const other = array[pos]
    array[i] = other
    array[pos] = temp
  }
  return array
}

let animalClick = 0
let animalShift = 0
let animalJump = false

contentContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('card')) {
    e.target.classList.remove('backCard')
    e.target.classList.add('frontCard')
    if (!animalClick) {
      animalClick = e.target
    } else if (animalClick && !animalShift) {
      animalShift = e.target
      animalJump = true
    }
    if (animalClick && animalShift && animalClick.classList.value !== animalShift.classList.value) {
      setTimeout(function () {
        animalClick.classList.remove('frontCard')
        animalClick.classList.add('backCard')
        animalShift.classList.remove('frontCard')
        animalShift.classList.add('backCard')
        animalClick = 0
        animalShift = 0
        animalJump = false
      }, 1000)
    } else if (animalClick && animalShift && animalClick.classList.value === animalShift.classList.value) {
      animalClick.classList.add('match')
      animalShift.classList.add('match')
      animalWin()
      animalClick = 0
      animalShift = 0
    }
  }
})

const allAnimals = document.getElementsByClassName('card')

function animalWin () {
  let animalCount = 0
  for (const animal of allAnimals) {
    if (animal.classList.contains('match')) {
      animalCount++
    }
  }
  if (animalCount === allAnimals.length) {
    console.log('YOU WON!')
    for (const animal of allAnimals) {
      animal.classList.add('winning')
    }
  }
}

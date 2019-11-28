const contentContainer = document.getElementById('contentContainer')

const decks = {
  easy: ['notepad', 'atom', 'codepen'],
  medium: ['notepad', 'atom', 'codepen', 'github', 'visualstudiocode'],
  advance: ['notepad', 'atom', 'codepen', 'github', 'visualstudiocode', 'brackets']
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

let cardClick = 0
let cardShift = 0
let cardJump = false

contentContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('card')) {
    e.target.classList.remove('backCard')
    e.target.classList.add('frontCard')
    if (!cardClick) {
      cardClick = e.target
    } else if (cardClick && !cardShift) {
      cardShift = e.target
      cardJump = true
    }
    if (cardClick && cardShift && cardClick.classList.value !== cardShift.classList.value) {
      setTimeout(function () {
        cardClick.classList.remove('frontCard')
        cardClick.classList.add('backCard')
        cardShift.classList.remove('frontCard')
        cardShift.classList.add('backCard')
        cardClick = 0
        cardShift = 0
        cardJump = false
      }, 1000)
    } else if (cardClick && cardShift && cardClick.classList.value === cardShift.classList.value) {
      cardClick.classList.add('match')
      cardShift.classList.add('match')
      cardWin()
      cardClick = 0
      cardShift = 0
    }
  }
})

const allCards = document.getElementsByClassName('card')

function cardWin () {
  let cardCount = 0
  for (const card of allCards) {
    if (card.classList.contains('match')) {
      cardCount++
    }
  }
  if (cardCount === allCards.length) {
    console.log('YOU WON!')
    for (const card of allCards) {
      card.classList.add('winning')
    }
  }
}

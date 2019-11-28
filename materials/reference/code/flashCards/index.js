const decks = {
  Baking: [['Genoise is a type of what?', 'cake'], ['What is diplomat cream made out of?', 'pastry cream & whipped cream'], ['What is a tuile?', 'a type of cookie'], ['Which type of meringue is made with boiling sugar?', 'italian'], ['What is the main difference between pate brisee and pate sucree?', 'pate brisee is savory and pate sucree is sweet'], ['What can act as a leavenning agent?', 'yeast']],
  Candy: [['What spice is used to flavor licorice candy?', 'anise'], ['What candy bar originally in three pieces and had three different flavors?', '3 musketeers'], ['In 1995, which color of M&M was voted into packages by the public?', 'blue'], ['Which candy slogan is "Makes Mouths Happy?"', 'Twizzlers'], ['Which of these was not amoung the four original "Starburst" flavors?', 'cherry'], ['Which candy is known for being extremly sour?', 'warheads']]
}

const decksHTML = Object.keys(decks).map(deck =>
  `<div class="deck">${deck}</div>`
)

const $decks = document.getElementById('decks')

$decks.innerHTML = decksHTML.join(' ')

const $view = document.getElementById('view')

function showView () {
  $view.classList.add('show')
}

$decks.addEventListener('click', function (e) {
  if (e.target.classList.contains('deck')) {
    showView()
  }
})

const $answer = document.getElementById('answer')
const $question = document.getElementById('question')
const $showAnswer = document.getElementById('showAnswer')

function hideView () {
  $view.classList.remove(`show`)
}

const $close = document.getElementById('close')

$close.addEventListener('click', hideView)

const view = {
  deck: null,
  card: 0,
  total: 0
}

function setView (deck) {
  view.deck = deck
  view.card = 0
  view.total = decks[deck].length
}

$decks.addEventListener('click', function (e) {
  if (e.target.classList.contains('deck')) {
    setView(e.target.innerText)
    showCard()
    showView()
  }
})

const $card = document.getElementById('card')

function showCard () {
  $question.innerText = decks[view.deck][view.card][0]
  $answer.innerText = decks[view.deck][view.card][1]
}

function nextCard () {
  view.card = (view.card === view.total - 1 ? 0 : view.card + 1)
  showCard()
}

const $next = document.getElementById('next')

function showAnswer () {
  $answer.classList.toggle('show')
}

$showAnswer.addEventListener('click', showAnswer)

$next.addEventListener('click', nextCard)
function prevCard () {
  view.card = (view.card ? view.card : view.total) - 1
  showCard()
}

const $prev = document.getElementById('prev')
$prev.addEventListener('click', prevCard)

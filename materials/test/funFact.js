const decks = {
    Programmer: [['Ada Lovelace, the daughter of the English poet Lord Byron, is considered to be the first computer programmer. ', 'In 1843, she worked with Charles Babbage, the inventor of some early mechanical computers, to create the first program for one of his machines—the Analytical Engine.'], ['Coders who study and write malware are known as hackers. ', 'Those who write malware to commit crimes are known as “black-hat” hackers, and those who write programs to protect against malware are called “white-hat" hackers.'], ['Just as people can understand different languages computers can understand different languages ', '(like Python, C, C++, Perl, Visual Basic, Java, JavaScript, Ruby and PHP, among others) which translate our instructions into binary.']],
    Game: [['Many of the people who shaped our digital world started out by coding games for fun… ', 'For example, Steve Jobs and Steve Wozniak, the co-founders of multinational technology company Apple, began their coding careers as teenagers when they created the arcade game Breakout. '], ['What is considered as the forefather of today’s action video games and the first digital computer game wasn’t particularly successful.', 'In 1962, a computer programmer from Massachusetts Institute of Technology (MIT), Steve Russell, and his team took 200 man-hours to create the first version of Spacewar. Using the front-panel test switches, the game allowed two players to take control of two tiny spaceships. It became your mission to destroy your opponent’s spaceship before it destroyed you.'], ['Video games market is worth more than music and movies which you would assume that music and video are where the biggest revenues are. ', 'But in fact, both Hollywood and the global music industry are dwarfed by video games.']],
    Virus: [['Some programs are designed to steal your data or damage your computer. ', 'These programs are called malware. Viruses, worms, and trojans are all types of malware. You should be careful online and avoid accidentally downloading malware! '], ['The first computer virus came into being. ', 'Programmer Fred Cohen was known for designing anti-virus software and in order to prove it was needed, he came up with a computer virus that was able to seize a computer, make copies of itself and then spread from unit to unit. '], ['A computer bug is when something goes wrong within the coding. ', 'But in 1947, the first recorded computer bug was an actual bug. Admiral Grace Hopper of the US Navy was working on a Mark II computer when it began working ineffectively. A closer examination of the machinery led Ms. Hooper to discover a moth stuck in a relay which was hindering the computer’s operation, leading her to note that "a bug had been found". ']],
    History: [['Guido van Rossum was also reading the published scripts from “Monty Python’s Flying Circus”, a BBC comedy series from the 1970s. ', 'Van Rossum thought he needed a name that was short, unique, and slightly mysterious, so he decided to call the language Python. '], ['The first high-level (very close to real English that we use to communicate) programming language was FORTRAN ', 'invented in 1954 by IBM’s John Backus. '], ['Spacecraft often run using old-fashioned computer systems because engineers are confident their programs do the job well, while making a new one is risky and expensive. ', 'NASA’s reusable spacecraft, the Space Shuttle, went into space using a computer designed in the 1970s. It had less code than most of today’s cell phones!']]
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
  
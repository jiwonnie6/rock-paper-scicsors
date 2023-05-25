
function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors']

  let computerChoice = Math.floor(Math.random() * options.length)

  return options[computerChoice]
}

function getResult(playerChoice, computerChoice) {
  let score

  // All situations where human draws, set `score` to 0

  if (playerChoice == computerChoice) {
    score = 0
  } 
  else if (playerChoice == 'rock' && computerChoice == 'scissors') 
  {
    score = 1
  } 
  else if (playerChoice == 'paper' && computerChoice == 'rock') 
  {
    score = 1
  } 
  else if (playerChoice == 'scissors' && computerChoice == 'paper') 
  {
    score = 1
  }
  else {
    score = -1
  }

  // return score
  return score
  
}

// showResult updates the DOM 
function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById('result')
  const vs = document.getElementById('vs')

  vs.innerText = `| You chose: ${playerChoice} | Computer chose: ${computerChoice} |`
  
  if (score == -1) {
    result.innerText = 'Loser'
  } else if (score == 0) {
    result.innerText = 'Tie'
  } else {
    result.innerText = 'Winner winner chicken dinner !'
  }
}

// Calculate who won and show it on the screen
function onClickRPS(playerChoice) {

  const computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)

  showResult(score, playerChoice, computerChoice)
  
}


// Make the RPS buttons actively listen for a click and do something once a click is detected
function playGame() {
  // use querySelector to select all RPS Buttons

  // Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked

  const buttons = document.querySelectorAll('.rpsButton')

  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
  })

  // Add a click listener to the end game button that runs the endGame() function on click

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
}

// endGame function clears all the text on the DOM
function endGame() {
let vs = document.getElementById('vs')
let result = document.getElementById('result')

vs.innerText = ''
result.innerText = ''
}

playGame()


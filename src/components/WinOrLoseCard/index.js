import './index.css'

const WinOrLoseCard = props => {
  const {score, resetBtn} = props

  const resetGame = () => {
    resetBtn()
  }

  let displayScore
  let winOrLose
  let img

  if (score === 12) {
    displayScore = 'You Won'
    winOrLose = 'Best Score'
    img = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    displayScore = 'You Lose'
    winOrLose = 'Score'
    img = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="center">
      <div className="scorecard-container">
        <div className="scoreCard">
          <h1>{displayScore}</h1>
          <p>{winOrLose}</p>
          <p>{score}/12</p>
          <button type="button" onClick={resetGame}>
            Play Again
          </button>
        </div>
        <div className="ord">
          <img className="game-img" src={img} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard

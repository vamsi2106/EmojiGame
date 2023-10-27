import './index.css'

const NavBar = props => {
  const {score, topScore, gameStat} = props
  let a
  let b

  if (score === 12 || gameStat === false) {
    a = ''
    b = ''
  } else {
    a = <p>Score: {score}</p>
    b = <p>Top Score: {topScore}</p>
  }
  return (
    <div>
      <nav>
        <div className="emojiLogo">
          <img
            className="emoji"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        <div className="nav-score">
          {a}
          {b}
        </div>
      </nav>
    </div>
  )
}

export default NavBar

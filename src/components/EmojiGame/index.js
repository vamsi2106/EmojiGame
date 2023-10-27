/* 
Quick Tip 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    isGameInProgress: true,
    topScore: 0,
    clickedEmojis: [],
  }

  resetGame = () => {
    console.log('reset triggerd')
    const {topScore, clickedEmojis} = this.state

    if (clickedEmojis.length > topScore) {
      this.setState({topScore: clickedEmojis.length, isGameInProgress: true})
    }
    this.setState({clickedEmojis: [], isGameInProgress: true})
  }

  finishGameAndUpdateTopScore = () => {
    const {topScore, clickedEmojis} = this.state
    if (clickedEmojis.length > topScore) {
      this.setState({
        topScore: clickedEmojis.length,
        isGameInProgress: false,
      })
    } else {
      this.setState({
        isGameInProgress: false,
      })
    }
  }

  renderGame = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const Emojis = shuffledEmojisList()
    return (
      <div className="EmojiGame">
        <ul className="emojis-container">
          {Emojis.map(eachItem => (
            <EmojiCard
              emojiItem={eachItem}
              onEmojiItem={this.onClickEmojiItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  onClickEmojiItem = id => {
    const {emojisList} = this.props
    const emojisListLength = emojisList.length
    const {clickedEmojis} = this.state
    const isEmojiClicked = clickedEmojis.includes(id)

    console.log(id)

    if (isEmojiClicked) {
      this.finishGameAndUpdateTopScore()
    } else {
      if (clickedEmojis.length === emojisListLength - 1) {
        this.finishGameAndUpdateTopScore()
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  render() {
    const {clickedEmojis, topScore, isGameInProgress} = this.state

    return (
      <div className="main">
        <NavBar
          score={clickedEmojis.length}
          topScore={topScore}
          gameStat={isGameInProgress}
        />
        {isGameInProgress ? (
          this.renderGame()
        ) : (
          <div>
            <WinOrLoseCard
              score={clickedEmojis.length}
              gameProgress={isGameInProgress}
              resetBtn={this.resetGame}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame

import './index.css'

const EmojiCard = props => {
  const {emojiItem, onEmojiItem} = props

  const {id, emojiName, emojiUrl} = emojiItem

  const onClickEmoji = () => {
    onEmojiItem(id)
  }

  return (
    <li title={id} className="emojiCard-container" onClick={onClickEmoji}>
      <button className="btn" type="button">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

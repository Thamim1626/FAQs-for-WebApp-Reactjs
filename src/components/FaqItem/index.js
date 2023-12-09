const FaqItem = props => {
  const {eachItem, plusClick, isAnwerVisible} = props
  const {questionText, id} = eachItem
  const findID = () => {
    plusClick(id, isAnwerVisible)
  }

  return (
    <li className="item">
      <div className="item-in">
        <h1 className="question">{questionText}</h1>
        <button className="list-button" type="button" onClick={findID}>
          <img
            src={
              isAnwerVisible
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isAnwerVisible ? 'minus' : 'plus'}
            className="icon"
          />
        </button>
      </div>
      {isAnwerVisible && <hr />}
      {isAnwerVisible && (
        <div className="answer">
          <p>{eachItem.answerText}</p>
        </div>
      )}
    </li>
  )
}
export default FaqItem

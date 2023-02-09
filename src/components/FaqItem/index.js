import './index.css'

const FaqItem = props => {
  const {eachFaq, isAnswerAsked, updateActiveIdList} = props
  const {id, questionText, answerText} = eachFaq

  const imgToShowOrHideAnswer = isAnswerAsked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imgAltText = isAnswerAsked ? 'minus' : 'plus'

  const onClickPlusOrMinus = () => {
    updateActiveIdList(id)
  }

  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <img
          src={imgToShowOrHideAnswer}
          alt={imgAltText}
          className="image-symbol"
          onClick={onClickPlusOrMinus}
        />
      </div>
      {isAnswerAsked ? <p className="answer">{answerText}</p> : ''}
    </li>
  )
}

export default FaqItem

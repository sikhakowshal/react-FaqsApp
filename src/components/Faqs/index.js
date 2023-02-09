import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {activeIdList: []}

  updateActiveIdList = id => {
    const {activeIdList} = this.state
    const isIdPresent = activeIdList.some(eachActiveId => eachActiveId === id)

    if (!isIdPresent) {
      this.setState(prevState => ({
        activeIdList: [...prevState.activeIdList, id],
      }))
    } else {
      const filteredActiveIdList = activeIdList.filter(
        eachActiveId => eachActiveId !== id,
      )
      this.setState({activeIdList: [...filteredActiveIdList]})
    }
  }

  render() {
    const {faqsList} = this.props
    const {activeIdList} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                eachFaq={eachFaq}
                key={eachFaq.id}
                isAnswerAsked={activeIdList.some(
                  eachActiveFaq => eachFaq.id === eachActiveFaq,
                )}
                updateActiveIdList={this.updateActiveIdList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

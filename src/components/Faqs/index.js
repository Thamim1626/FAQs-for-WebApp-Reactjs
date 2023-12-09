import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {initialList: faqsList}
  }

  plusClick = (id, isAnwerVisible) => {
    const {initialList} = this.state
    const filterList = initialList.map(eachItem => {
      if (id === eachItem.id) {
        return {
          ...eachItem,
          isAnwerVisible: !eachItem.isAnwerVisible,
        }
      }
      return eachItem
    })
    this.setState({initialList: filterList})
    console.log(`${id} ${isAnwerVisible}`)
  }

  render() {
    const {initialList} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">FAQS</h1>
          <ul className="list">
            {initialList.map(eachItem => (
              <FaqItem
                eachItem={eachItem}
                key={eachItem.id}
                plusClick={this.plusClick}
                isAnwerVisible={eachItem.isAnwerVisible}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

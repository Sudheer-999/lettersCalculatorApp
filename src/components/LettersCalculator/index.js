import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onInput = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="left-con">
          <h1 className="main-head">Calculate the Letters you enter</h1>
          <label className="desc" htmlFor="inputTxt">
            Enter the phrase
          </label>
          <input
            className="search-box"
            type="text"
            onChange={this.onInput}
            placeholder="Enter the phrase"
            id="inputTxt"
          />
          <p className="letters">No.of letters: {count}</p>
        </div>
        <div className="right-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="logo"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

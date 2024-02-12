import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onClickInput = event => {
    this.setState({count: event.target.value.length})
    console.log(event.target.value.length)
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="style-heading">
              Calculate the <br /> Letters you <br /> enter
            </h1>
            <label className="style-paragraph" htmlFor="phraseInput">
              Enter the phrase
            </label>
            <br />
            <input
              id="phraseInput"
              className="style-input"
              placeholder="Enter the phrase"
              type="text"
              onChange={this.onClickInput}
            />
            <p className="textCounter">No.of letters: {count}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img-style"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

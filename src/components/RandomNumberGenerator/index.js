// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100)
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="btn" onClick={this.getRandomNumber}>
            Generate
          </button>
          <p className="random-num">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

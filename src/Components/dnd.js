import React from 'react';
import DiceAdder from './diceAdder'

class App extends React.Component {
  state = {
    d4Num: 0,
    d6Num: 0,
    d8Num: 0,
    d10Num: 0,
    d12Num: 0,
    d20Num: 0,
    rollTotal: 0,
  }

  addD4 = numToAdd => {
    let newD4Num = this.state.d4Num + numToAdd
    this.setState({ d4Num: newD4Num })
  }

  addD6 = numToAdd => {
    let newD6Num = this.state.d6Num + numToAdd
    this.setState({ d6Num: newD6Num })
  }

  addD8 = numToAdd => {
    let newD8Num = this.state.d8Num + numToAdd
    this.setState({ d8Num: newD8Num })
  }

  addD10 = numToAdd => {
    let newD10Num = this.state.d10Num + numToAdd
    this.setState({ d10Num: newD10Num })
  }

  addD12 = numToAdd => {
    let newD12Num = this.state.d12Num + numToAdd
    this.setState({ d12Num: newD12Num })
  }

  addD20 = numToAdd => {
    let newD20Num = this.state.d20Num + numToAdd
    this.setState({ d20Num: newD20Num })
  }

  rollMyDice = () => {
    let returnValue = 0
    for (let i = this.state.d4Num; i > 0; i--) {
      returnValue += this.rollD4()
    }
    for (let i = this.state.d6Num; i > 0; i--) {
      returnValue += this.rollD6()
    }
    for (let i = this.state.d8Num; i > 0; i--) {
      returnValue += this.rollD8()
    }
    for (let i = this.state.d10Num; i > 0; i--) {
      returnValue += this.rollD10()
    }
    for (let i = this.state.d12Num; i > 0; i--) {
      returnValue += this.rollD12()
    }
    for (let i = this.state.d20Num; i > 0; i--) {
      returnValue += this.rollD20()
    }
    console.log(returnValue)
    this.setState({ rollTotal: returnValue })
  }

  rollD4 = () => Math.ceil(Math.random() * 4)
  rollD6 = () => Math.ceil(Math.random() * 6)
  rollD8 = () => Math.ceil(Math.random() * 8)
  rollD10 = () => Math.ceil(Math.random() * 10)
  rollD12 = () => Math.ceil(Math.random() * 12)
  rollD20 = () => Math.ceil(Math.random() * 20)

  render() {
    return (
      <div>
        <DiceAdder diceType='d4' addDice={this.addD4} />
        <DiceAdder diceType='d6' addDice={this.addD6} />
        <DiceAdder diceType='d8' addDice={this.addD8} />
        <DiceAdder diceType='d10' addDice={this.addD10} />
        <DiceAdder diceType='d12' addDice={this.addD12} />
        <DiceAdder diceType='d20' addDice={this.addD20} />
        <button onClick={() => this.rollMyDice()}>Roll</button>

        <h2>{this.state.rollTotal}</h2>
      </div>
    )
  };
}

export default App;

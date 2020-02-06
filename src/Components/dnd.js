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

  handleD4Change = diceNum => this.setState({ d4Num: diceNum })

  handleD6Change = diceNum => this.setState({ d6Num: diceNum })

  handleD8Change = diceNum => this.setState({ d8Num: diceNum })

  handleD10Change = diceNum => this.setState({ d10Num: diceNum })

  handleD12Change = diceNum => this.setState({ d12Num: diceNum })

  handleD20Change = diceNum => this.setState({ d20Num: diceNum })

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
        <DiceAdder diceType='d4' handleDice={this.handleD4Change} />
        <DiceAdder diceType='d6' handleDice={this.handleD6Change} />
        <DiceAdder diceType='d8' handleDice={this.handleD8Change} />
        <DiceAdder diceType='d10' handleDice={this.handleD10Change} />
        <DiceAdder diceType='d12' handleDice={this.handleD12Change} />
        <DiceAdder diceType='d20' handleDice={this.handleD20Change} />
        <button onClick={() => this.rollMyDice()}>Roll</button>

        <h2>{this.state.rollTotal}</h2>
      </div>
    )
  };
}

export default App;

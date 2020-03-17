import React from 'react';
import DiceAdder from './diceAdder'
import '../css/Container.css'
import styled from 'styled-components';

class DiceAccumulator extends React.Component {
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
      returnValue += this.props.rollFuncs.rollD4()
    }
    for (let i = this.state.d6Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD6()
    }
    for (let i = this.state.d8Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD8()
    }
    for (let i = this.state.d10Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD10()
    }
    for (let i = this.state.d12Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD12()
    }
    for (let i = this.state.d20Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD20()
    }
    this.setState({ rollTotal: returnValue })
  }

  render() {
    return (
      <div>
        <div>
          <Total>{this.state.rollTotal}</Total>
        </div>
        <div className='DiceAdderContainer'>
          <DiceAdder diceType='d4' handleDice={this.handleD4Change} />
          <DiceAdder diceType='d6' handleDice={this.handleD6Change} />
          <DiceAdder diceType='d8' handleDice={this.handleD8Change} />
          <DiceAdder diceType='d10' handleDice={this.handleD10Change} />
          <DiceAdder diceType='d12' handleDice={this.handleD12Change} />
          <DiceAdder diceType='d20' handleDice={this.handleD20Change} />
        </div>
        <div>
          <Button onClick={() => this.rollMyDice()}>Roll</Button>
        </div>
      </div>
    )
  };
}

const Button = styled.button`
  display: block;
  padding: 12px 32px;
  margin: auto;
`

const Total = styled.h2`
  text-align: center;
`

export default DiceAccumulator;

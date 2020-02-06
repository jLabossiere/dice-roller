import React from 'react'
import styled from 'styled-components';

class DiceAdder extends React.Component {
  state = {
    numToAdd: 0
  }

  handleChange = e => {
    this.setState({
      numToAdd: e.target.value
    })
  }

  render() {
    return (
      <StyledDiceAdder>
        <p>{this.props.diceType}</p>
        <input
          type='number'
          onChange={this.handleChange}
          value={this.state.numToAdd}
        />
        <button
          onClick={() => this.props.addDice(Number.parseInt(this.state.numToAdd))}>
          Add Dice
          </button>
      </StyledDiceAdder>
    )
  }
}

const StyledDiceAdder = styled.div`
  display: inline-block;
  width: 30%;
`

export default DiceAdder
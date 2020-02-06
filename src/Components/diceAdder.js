import React from 'react'
import styled from 'styled-components';

class DiceAdder extends React.Component {
  state = {
    numToAdd: 0
  }

  handleChange = e => {
    this.setState({ numToAdd: Number.parseInt(e.target.value) },
      () => this.props.handleDice(this.state.numToAdd)
    )
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
      </StyledDiceAdder>
    )
  }
}

const StyledDiceAdder = styled.div`
  display: inline-block;
  width: 33%;
  margin: auto;
`

export default DiceAdder
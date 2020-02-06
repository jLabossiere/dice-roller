import React from 'react'
import Attack from './attack'

class AttackCalculator extends React.Component {
  state = {
    atta
    storedAttacks =[]
  }

  render() {
    return (
      <div>
        <div>

        </div>

        {this.state.storedAttacks.forEach(attack => {
          return (<Attack />)
        })}
      </div>
    )
  }
}

export default AttackCalculator
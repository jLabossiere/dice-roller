import React from 'react'
import styled from 'styled-components'

class Attack extends React.Component {
  state = {
    DisplayAttack: '',
    DisplayDamage: '',
  }

  CalculateDamage = () => {
    let returnValue = 0
    for (let i = this.props.attackInfo.DamageD4Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD4()
    }
    for (let i = this.props.attackInfo.DamageD6Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD6()
    }
    for (let i = this.props.attackInfo.DamageD8Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD8()
    }
    for (let i = this.props.attackInfo.DamageD10Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD10()
    }
    for (let i = this.props.attackInfo.DamageD12Num; i > 0; i--) {
      returnValue += this.props.rollFuncs.rollD12()
    }

    return returnValue
  }

  RollAttack = () => {
    let AttRoll = this.props.rollFuncs.rollD20()
    let AttDisplay = AttRoll +
      this.props.attackInfo.AttackBonus
    let DmgDisplay = this.CalculateDamage()
    this.setState({
      DisplayAttack: AttDisplay,
      DisplayDamage: DmgDisplay,
    })
  }

  render() {

    return (
      <AttackContainer>
        {this.props.attackInfo.AttackName}
        Attack: {this.state.DisplayAttack}
        Damage: {this.state.DisplayDamage}
        <button onClick={this.RollAttack}>Roll Attack</button>
      </AttackContainer>
    )
  }
}

const AttackContainer = styled.div`
width: 30%;
display: flex;
`

export default Attack
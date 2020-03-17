import React from 'react'
import Attack from './attack'
import DiceAdder from './diceAdder'
import '../css/Container.css'
import styled from 'styled-components'

class AttackCalculator extends React.Component {
  state = {
    FormAttackName: '',
    FormAttackBonus: 0,
    FormAttackD4Num: 0,
    FormAttackD6Num: 0,
    FormAttackD8Num: 0,
    FormAttackD10Num: 0,
    FormAttackD12Num: 0,
    FormAttackDamBonus: 0,
    storedAttacks: [],
  }

  handleNameChange = e => this.setState({ FormAttackName: e.target.value })

  handleABonusChange = e => this.setState({
    FormAttackBonus: Number.parseInt(e.target.value)
  })

  handleDBonusChange = e => this.setState({
    FormAttackDamBonus: Number.parseInt(e.target.value)
  })

  handleD4Change = diceNum => this.setState({ FormAttackD4Num: diceNum })

  handleD6Change = diceNum => this.setState({ FormAttackD6Num: diceNum })

  handleD8Change = diceNum => this.setState({ FormAttackD8Num: diceNum })

  handleD10Change = diceNum => this.setState({ FormAttackD10Num: diceNum })

  handleD12Change = diceNum => this.setState({ FormAttackD12Num: diceNum })

  MakeAttack = e => {
    e.preventDefault()
    let newAttack = {
      AttackName: this.state.FormAttackName,
      AttackBonus: this.state.FormAttackBonus,
      DamageD4Num: this.state.FormAttackD4Num,
      DamageD6Num: this.state.FormAttackD6Num,
      DamageD8Num: this.state.FormAttackD8Num,
      DamageD10Num: this.state.FormAttackD10Num,
      DamageD12Num: this.state.FormAttackD12Num,
      DamageBonus: this.state.FormAttackDamBonus
    }
    this.setState({
      FormAttackName: '',
      FormAttackBonus: 0,
      FormAttackD4Num: 0,
      FormAttackD6Num: 0,
      FormAttackD8Num: 0,
      FormAttackD10Num: 0,
      FormAttackD12Num: 0,
      FormAttackDamBonus: 0,
      storedAttacks: [...this.state.storedAttacks, newAttack]
    })
  }

  render() {
    return (
      <div>
        <form>
          <div className='attackName'>
            <div>
              <label>Name: </label>
              <input
                value={this.state.FormAttackName}
                onChange={this.handleNameChange}
              />
            </div>
            <div>
              <label>Attack Bonus: </label>
              <input
                type='number'
                onChange={this.handleABonusChange}
              />
            </div>
          </div>

          <div className='DiceAdderContainer'>
            <DiceAdder diceType='d4' handleDice={this.handleD4Change} />
            <DiceAdder diceType='d6' handleDice={this.handleD6Change} />
            <DiceAdder diceType='d8' handleDice={this.handleD8Change} />
            <DiceAdder diceType='d10' handleDice={this.handleD10Change} />
            <DiceAdder diceType='d12' handleDice={this.handleD12Change} />
            <DamageBonusContainer>
              <p className='DamageBonus'>Damage Bonus: </p>
              <DamageBonusInput
                type='number'
                onChange={this.handleDBonusChange}
              />
            </DamageBonusContainer>
            <div style={{ width: '90%', textAlign: "center" }}>
              <button type='submit' onClick={e => this.MakeAttack(e)}>
                Make Attack
              </button>
            </div>
          </div>
        </form>

        {this.state.storedAttacks.map((attack, index) => {
          return <Attack
            key={index}
            attackInfo={attack}
            rollFuncs={this.props.rollFuncs}
          />
        })}
      </div>
    )
  }
}

const DamageBonusInput = styled.input`
width: '40%',
max-width: '157px'
`

const DamageBonusContainer = styled.div`
  display: flex;
  width: 30%;
  height: 53px;
  min-width: 188px;
  margin: auto;
  border: solid black 1px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export default AttackCalculator
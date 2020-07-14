import React from 'react'

class MonAttack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.monster.Name,
      maxHP: props.monster.maxHealth,
      currentHp: props.monster.maxHealth,
      attacks: [...props.monster.Attacks],
      selectedAttack: 0,
      currentAttack: 0,
      currentDamage: 0,
      hasAdv: false,
      hasDisadv: false,
    }
  }

  handleAttackChange = e => {
    this.setState({ selectedAttack: e.target.value })
  }

  handleAdvChange = e => {
    let currentAdv = this.state.hasAdv
    this.setState({ hasDisadv: !currentAdv })
  }

  handleDisadvChange = e => {
    let currentDisadv = this.state.hasDisadv
    this.setState({ hasDisadv: !currentDisadv })
  }

  handleSubmit = e => {
    e.preventDefault()

    let attack = this.props.monster.Attacks[Number.parseInt(this.state.selectedAttack)]

    let attackRoll = attack.Tags.includes('adv') ?
      this.props.rollFuncs.Adv(this.props.rollFuncs.rollD20(), this.props.rollFuncs.rollD20)
      : this.props.rollFuncs.rollD20()
  }



  render() {
    return (
      <div>
        <h5>{this.state.name}</h5>
        <div>
          Attack Roll: {this.state.currentAttack}
        </div>
        <div>
          Damage Roll: {this.state.currentDamage}
        </div>
        <form onSubmit={this.handleSubmit}>
          <select vlaue={this.state.selectedAttack} onChange={this.handleAttackChange}>
            {this.state.attacks.map((value, ind) => {
              return <option value={ind}>{value.Name}</option>
            })}
          </select>
          <div>
            <label>Has Advantage:
              <input name='hasAdv'
                type='checkbox'
                value={this.state.hasAdv}
                onChange={this.handleAdvChange} />
            </label>
            <label>Has Disadvantage:
              <input name='hasDisadv'
                type='checkbox'
                value={this.state.hasDisadv}
                onChange={this.handleDisadvChange} />
            </label>
          </div>
          <button type='submit'>Make Attack</button>
        </form>
      </div>
    )
  }
}

export default MonAttack
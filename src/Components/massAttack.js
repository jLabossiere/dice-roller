import React from 'react'
import MonAttack from './massMonAttack'

class MassAttack extends React.Component {
  state = {
    addNum: 0,
    monsters: []
  }

  addMonsters = e => {
    let newMonsterArray = [...this.state.monsters]
    for (let i = this.state.addNum; i > 0; i--) {
      newMonsterArray.push(berserker)
    }
    this.setState({
      monsters: newMonsterArray
    })
  }

  handleAddNumChange = e => {
    this.setState({ addNum: Number.parseInt(e.target.value) })
  }

  render() {
    return (
      <div>
        <div>
          <input type='number'
            value={this.state.addNum}
            onChange={this.handleAddNumChange} />
          <button onClick={e => this.addMonsters(e)}>Add Creatures</button>
        </div>
        <div>
          {
            this.state.monsters.map((ele, ind) => {
              return <MonAttack monster={ele} key={ind} />
            })
          }
        </div>
      </div>
    )
  }
}

export default MassAttack
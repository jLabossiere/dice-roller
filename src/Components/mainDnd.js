import React from 'react'
import DiceAccumulator from './diceAccumulator'
import AttackCalculator from './attackCalculator'
import MassAttack from './massAttack'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'

class MainDnd extends React.Component {

  rollD4 = () => Math.ceil(Math.random() * 4)
  rollD6 = () => Math.ceil(Math.random() * 6)
  rollD8 = () => Math.ceil(Math.random() * 8)
  rollD10 = () => Math.ceil(Math.random() * 10)
  rollD12 = () => Math.ceil(Math.random() * 12)
  rollD20 = () => Math.ceil(Math.random() * 20)

  DiceRollFuncs = {
    rollD4: this.rollD4,
    rollD6: this.rollD6,
    rollD8: this.rollD8,
    rollD10: this.rollD10,
    rollD12: this.rollD12,
    rollD20: this.rollD20,
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/attacks'>Attack</Link></li>
            <li><Link to='/mass'>Mass Attacks</Link></li>
          </ul>
          <Switch>
            <Route path='/mass'>
              <MassAttack rollFuncs={this.DiceRollFuncs} />
            </Route>
            <Route path='/attacks'>
              <AttackCalculator rollFuncs={this.DiceRollFuncs} />
            </Route>
            <Route path='/'>
              <DiceAccumulator rollFuncs={this.DiceRollFuncs} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default MainDnd
let Berserker = {
  Name: 'Berserker',
  maxHealth: 67,
  Attacks: [
    {
      Name: 'Great Axe',
      AttackBonus: 5,
      DamageDieSize: 12,
      DamageBonus: 3,
    },
    {
      Name: 'Reckless Great Axe',
      CalculateAttack: () => Math.ceil(Math.random() * 20 + 5),
      CalculateDamage: () => Math.ceil(Math.random() * 12 + 3),
    },
  ]
}
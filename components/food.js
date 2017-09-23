import React from 'react'
import { connect } from 'react-redux'

const { Group, Rect } = ReactKonva

const Food = ({ food, app }) => {
  return (
    <Group>
      <Rect
        x={food.x * 10}
        y={food.y * 10}
        width={10}
        height={10}
        fill="red"
        stroke="white"
      />
    </Group>
  )
}
const connector = connect(state => {
  return { food: state.food, app: state.app }
})

export default connector(Food)

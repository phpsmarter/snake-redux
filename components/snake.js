import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
const { map } = R
const { Group, Rect } = ReactKonva

const part = cell => (
  <Rect
    x={cell.x * 10}
    y={cell.y * 10}
    width={10}
    height={10}
    fill="blue"
    stroke="white"
    fill={cell.color}
  />
)

const Snake = props => {
  console.log(props.snake)
  return <Group>{map(part, props.snake)}</Group>
}
const connector = connect(state => {
  return { snake: state.snake }
})

export default connector(Snake)

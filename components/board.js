import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'

const { identity } = R
const { Group, Rect } = ReactKonva

const Board = props => {
  return (
    <Group>
      <Rect
        width={props.app.w}
        height={props.app.h}
        fill="white"
        stroke="white"
      />
    </Group>
  )
}
const connector = connect(identity)
export default connector(Board)

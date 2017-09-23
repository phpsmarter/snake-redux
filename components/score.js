import React from 'react'
import { connect } from 'react-redux'

const Score = props => {
  return <div>Score: {props.score}</div>
}

const connector = connect(state => ({ score: state.score }))

export default connector(Score)

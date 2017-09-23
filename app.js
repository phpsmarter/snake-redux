import React from 'react'
import ReactTouchEvents from 'react-touch-events'
import { connect } from 'react-redux'
import R from 'ramda'

import Board from './components/board'
import Snake from './components/snake'
import Food from './components/food'
import Score from './components/score'

const { toUpper } = R
const { Layer, Stage } = ReactKonva

const App = props => {
  return (
    <ReactTouchEvents
      onSwipe={direction => {
        let d = 'RIGHT'
        if (direction === 'bottom') {
          d = 40 // DOWN
        } else if (direction === 'top') {
          d = 38 // UP
        } else if (direction === 'left') {
          d = 37 // LEFT
        } else {
          d = 39 // RIGHT
        }
        props.dispatch({ type: 'CHANGE', payload: d })
      }}
    >
      <div className="">
        <h1 className="avenir tc mb2 ttu tracked">Snake</h1>
        <div className="flex items-center">
          <Stage className="center" width={400} height={400}>
            <Layer>
              <Board />
              <Snake />
              <Food />
            </Layer>
          </Stage>
        </div>
        <Score />
      </div>
    </ReactTouchEvents>
  )
}

const connector = connect(state => ({ app: state.app }))

export default connector(App)

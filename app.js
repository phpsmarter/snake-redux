import React from 'react'

const { Layer, Stage } = ReactKonva

import Board from './components/board'
import Snake from './components/snake'
import Food from './components/food'
import Score from './components/score'

const App = props => {
  return (
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
  )
}

export default App

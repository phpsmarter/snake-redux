import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import randomInt from 'random-int'

import R from 'ramda'

import reducers from './reducers'

const { equals, pick, head } = R
const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

export default store

store.subscribe(function() {
  const state = store.getState()
  const { snake, food, direction, app } = state

  // if game over stop snake
  if (
    head(snake).x === -1 ||
    head(snake).y === -1 ||
    head(snake).x === app.w / app.size ||
    head(snake).y === app.h / app.size
  ) {
    if (app.running) {
      store.dispatch({ type: 'STOP' })
    }
    return
  }

  // handle tick rules
  if (app.running && eatFood(food, head(snake))) {
    store.dispatch({ type: 'EAT', payload: createFood(app) })
    //return
  }

  // update state with move every 60 milliseconds
  if (app.running) {
    setTimeout(() => {
      store.dispatch({
        type: 'MOVE',
        payload: direction
      })
    }, 120)
  }
})

// pure functions
function eatFood(food, snakeHead) {
  const keys = ['x', 'y']
  const loc = pick(keys)
  return equals(loc(food), loc(snakeHead))
}

function createFood({ h, w, size }) {
  return { x: randomInt(0, w / size), y: randomInt(0, h / size), color: 'red' }
}

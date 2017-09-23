import R from 'ramda'

const {
  isNil,
  merge,
  clone,
  assoc,
  ifElse,
  cond,
  equals,
  head,
  dropLast,
  always,
  times,
  dec,
  inc,
  prepend,
  identity
} = R

export default { direction, ctx, snake, food, score, app }

function app(state = { h: 400, w: 400, size: 10, running: false }, action) {
  switch (action.type) {
    case 'SETUP':
      return merge(state, { running: true })
    case 'MOVE':
      return merge(state, { running: true })
    case 'CHANGE':
      return merge(state, { running: false })
    case 'EAT':
      return merge(state, { running: false })
    case 'STOP':
      return merge(state, { running: false })
    default:
      return state
  }
}

function direction(state = 'RIGHT', action) {
  switch (action.type) {
    case 'CHANGE':
      return cond([
        [equals(37), always('LEFT')],
        [equals(38), always('UP')],
        [equals(39), always('RIGHT')],
        [equals(40), always('DOWN')]
      ])(action.payload)
    default:
      return state
  }
}

function ctx(state = {}, action) {
  switch (action.type) {
    case 'SETUP':
      return action.payload
    default:
      return state
  }
}

function score(state = 0, action) {
  switch (action.type) {
    case 'CLEAR':
      return 0
    case 'EAT':
      return state + 1
    default:
      return state
  }
}

function snake(state, action) {
  // setup default
  state = ifElse(
    isNil,
    always(times(i => ({ x: i, y: 0, color: 'blue' }), 5)),
    identity
  )(state)
  let h = clone(head(state))
  switch (action.type) {
    case 'EAT':
      if (equals('RIGHT', action.payload)) {
        h = { x: inc(h.x), y: h.y, color: 'blue' }
      } else if (equals('LEFT', action.payload)) {
        h = { x: dec(h.x), y: h.y, color: 'blue' }
      } else if (equals('UP', action.payload)) {
        h = { x: h.x, y: dec(h.y), color: 'blue' }
      } else if (equals('DOWN', action.payload)) {
        h = { x: h.x, y: inc(h.y), color: 'blue' }
      }
      return prepend(h, state)

    case 'MOVE':
      if (equals('RIGHT', action.payload)) {
        h = { x: inc(h.x), y: h.y, color: 'blue' }
      } else if (equals('LEFT', action.payload)) {
        h = { x: dec(h.x), y: h.y, color: 'blue' }
      } else if (equals('UP', action.payload)) {
        h = { x: h.x, y: dec(h.y), color: 'blue' }
      } else if (equals('DOWN', action.payload)) {
        h = { x: h.x, y: inc(h.y), color: 'blue' }
      }
      return dropLast(1, prepend(h, state))
    case 'SET_SNAKE':
      return action.payload
    default:
      return state
  }
}

function food(state = { x: 10, y: 10, color: 'red' }, action) {
  switch (action.type) {
    case 'EAT':
      return action.payload
    case 'SET_FOOD':
      return merge(state, action.payload)
    default:
      return state
  }
}

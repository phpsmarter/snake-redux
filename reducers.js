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

export { direction, ctx, snake, food, score, app }

function app() {
  return { h: 400, w: 400, size: 10 }
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

function score(state, action) {
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

  switch (action.type) {
    case 'POP':
      return dropLast(1, state)
    case 'MOVE':
      let h = clone(head(state))
      h = cond([
        [equals('LEFT'), always(assoc('x', dec(h.x), h))],
        [equals('RIGHT'), always(assoc('x'), inc(h.x), h)],
        [equals('UP'), always(assoc('y', dec(h.y), h))],
        [equals('DOWN'), always(assoc('y', inc(h.y), h))]
      ])(action.payload)
      return prepend(h, state)
    case 'SET_SNAKE':
      return action.payload
    default:
      return state
  }
}

function food(state = { x: 10, y: 10, color: 'red' }, action) {
  switch (action.type) {
    case 'SET_FOOD':
      return merge(state, action.payload)
    default:
      return state
  }
}

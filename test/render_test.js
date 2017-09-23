import test from 'tape'
import render from '../render'
import R from 'ramda'
const { omit } = R
const noop = () => null

const ctx = {
  fillRect: noop,
  strokeRect: noop,
  fillText: noop
}

test('render', t => {
  const result = render({
    ctx,
    app: { h: 400, w: 400, size: 10 },
    snake: [
      { x: 0, y: 0, color: 'blue' },
      { x: -1, y: 0, color: 'blue' },
      { x: -2, y: 0, color: 'blue' }
    ],
    food: { x: 1, y: 1, color: 'red' },
    score: 0
  })
  t.deepEquals(omit(['ctx'], result), {
    app: { h: 400, w: 400, size: 10 },
    snake: [
      { x: 0, y: 0, color: 'blue' },
      { x: -1, y: 0, color: 'blue' },
      { x: -2, y: 0, color: 'blue' }
    ],
    food: { x: 1, y: 1, color: 'red' },
    score: 0
  })
  t.end()
})

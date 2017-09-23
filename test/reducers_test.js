import test from 'tape'
import reducers from '../reducers'
const { app, snake, food, direction, ctx, score } = reducers

test('reducers snake move', t => {
  const state = snake(null, { type: 'MOVE', payload: 'DOWN' })
  t.equals(state[0].y, 1)
  t.end()
})

test('reducers score', t => {
  const state = score(0, {
    type: 'EAT'
  })
  t.equals(state, 1)
  t.end()
})

test('reducers food', t => {
  const state = food(
    { x: 10, y: 10, color: 'red' },
    { type: 'SET_FOOD', payload: { x: 2, y: 2 } }
  )
  t.deepEquals(state, { x: 2, y: 2, color: 'red' })
  t.end()
})

test('reducers direction', t => {
  const d = direction('RIGHT', { type: 'CHANGE', payload: 40 })
  t.equals(d, 'DOWN')
  t.end()
})

test('reducers app', t => {
  t.deepEquals(
    app(
      {
        h: 400,
        w: 400,
        size: 10
      },
      { type: 'SETUP' }
    ),
    {
      h: 400,
      w: 400,
      size: 10,
      running: true
    }
  )
  t.end()
})

test('reducers ctx', t => {
  t.equals(ctx(null, { type: 'SETUP', payload: 'foo' }), 'foo')
  t.end()
})

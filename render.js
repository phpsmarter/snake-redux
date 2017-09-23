import R from 'ramda'

const { compose, map, curry } = R

export default compose(paintFood, paintSnake, paintScore, paintBoard)

function paintBoard(state) {
  const { ctx } = state
  // paint board
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, 400, 400)
  ctx.strokeStyle = 'white'
  ctx.strokeRect(0, 0, 400, 400)

  return state
}

const paintCell = curry(function(ctx, size, cell) {
  ctx.fillStyle = cell.color
  ctx.fillRect(cell.x * size, cell.y * size, size, size)
  ctx.strokeStyle = 'white'
  ctx.strokeRect(cell.x * size, cell.y * size, size, size)
})

function paintScore(state) {
  const { ctx, score, app } = state
  ctx.fillStyle = 'white'
  ctx.fillText('Score: ' + score, 5, app.h - 5)
  return state
}

function paintSnake(state) {
  const { ctx, app, snake } = state
  map(paintCell(ctx, app.size), snake)
  return state
}

function paintFood(state) {
  const { ctx, food, app } = state
  paintCell(ctx, app.size, food)
  return state
}

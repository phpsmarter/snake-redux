import R from 'ramda'

const { compose } = R

export default (state, dispatch) =>
  compose(paintFood, paintSnake, paintScore, paintBoard)

function paintBoard(state) {
  const { ctx } = state
  // paint board
  paintCell(ctx, 400, { x: 0, y: 0, color: 'white' })
  return state
}

function paintScore(state) {
  const { ctx, score, app } = state
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

function paintCell(ctx, app, cell) {
  const { size } = app

  ctx.fillStyle = cell.color
  ctx.fillRect(cell.x * size, cell.y * size, size, size)
  ctx.strokeStyle = 'white'
  ctx.strokeRect(cell.x * size, cell.y * size, size, size)
}

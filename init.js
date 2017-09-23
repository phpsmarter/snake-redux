export default store => {
  var container = document.body
  var canvas = document.createElement('canvas')
  const { w, h } = store.getState().app

  // set height and width
  canvas.setAttribute('height', h)
  canvas.setAttribute('width', w)

  // add to the container
  container.appendChild(canvas)

  // set canvas to 2d
  var ctx = canvas.getContext('2d')

  store.dispatch({ type: 'SETUP', payload: ctx })
}

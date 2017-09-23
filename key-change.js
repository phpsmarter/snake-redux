import R from 'ramda'
const { not, isNil, cond, equals, always, indexOf } = R

export default dispatch => {
  document.addEventListener('keydown', function(e) {
    if (indexOf(e.keyCode, [37, 38, 39, 40]) > -1) {
      dispatch({ type: 'CHANGE', payload: e.keyCode })
    }
  })
}

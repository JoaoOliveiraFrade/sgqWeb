export default {
  'CHANGE_COUNTER' (state, data) {
    state.count += data
  },
  changeCounterMutation (state, d) {
    state.count += d
  },
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
  // decrement: state => state.count--
  // DECREMENT: state => state.count--
}

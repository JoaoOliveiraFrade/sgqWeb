export default {
  changeCountAction (context, payload) {
    context.commit('CHANGE_COUNT', payload)
  },
  incrementCount (dispatch, state) {
    dispatch.commit('INCREMENT')
  },
  decrementCount (dispatch, state) {
    dispatch.commit('DECREMENT')
  }
}

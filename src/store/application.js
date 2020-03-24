import Vue from 'vue'

export const store = Vue.observable({
  draggingState: {}
})
export const mutations = {
  SetDraggingMap: (data) => {
    store.draggingState = data
  }
}
export default {
  store,
  mutations
}
// const application = {
//   state: Vue.observable(draggingMap || {}),
//
//   mutations: Vue.observable({
//     SET_DRAGMAP:() {
//     }
//   })
// }
//
// export default application

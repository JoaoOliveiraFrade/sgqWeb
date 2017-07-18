// import store from 'vuexStore'

// const isLogged = () => store.getters.isLogged
// const isAuthRoute = route => route.path.indexOf('/auth') !== -1

// const isTaskRoute = route => route.path.indexOf('/task') !== -1

// const isCadProjectsRoute = route => route.path.indexOf('/cadProjects') !== -1
// const isCadGroupers = route => route.path.indexOf('/cadGroupers') !== -1

// export default (to, from, next) => {
//   // if ((isCadProjectsRoute(to) || isCadGroupers(to)) && !isLogged()) {
//   // if (isTaskRoute(to) && !store.getters.isLogged) {
//   //   next('/auth?to=' + to.name)
//   // } else {
//   //   next()
//   // }
//   next()
// }

import store from '@/vuexStore'

const isLogged = () => store.getters.isLogged
// const isAuthRoute = route => route.path.indexOf('/auth') !== -1
// const isTaskRoute = route => route.path.indexOf('/task') !== -1
const isCadProjectRoute = route => route.path.indexOf('/cadProject') !== -1
const isCadGrouperRoute = route => route.path.indexOf('/cadGrouper') !== -1

export default (to, from, next) => {
  if ((isCadProjectRoute(to) || isCadGrouperRoute(to)) && !isLogged()) {
    next('/auth?to=' + to.name)
  } else {
    next()
  }
  next()
}

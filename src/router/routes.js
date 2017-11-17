import { routesModules } from '../module'

const routesCore = [
  { path: '/', name: 'root', redirect: '/home' }
]

export default [ ...routesCore, ...routesModules ]

/*
import MainHome from '@/module/home/MainHome.vue'
import MainTask from '@/module/task/MainTask.vue'
import MainCep from '@/module/cep/MainCep.vue'
import MainCounter from '@/module/counter/MainCounter.vue'

export default [
  { path: '/', name: 'root', component: MainHome },
  { path: '/home', name: 'home', component: MainHome },
  { path: '/task', name: 'task', component: MainTask },
  { path: '/cep', name: 'cep', component: MainCep },
  { path: '/counter', name: 'counter', component: MainCounter }
]
*/

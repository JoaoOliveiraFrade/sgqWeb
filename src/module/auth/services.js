/*
import axios from '@/http/axios'
export const getUser = (login, password) => {
  return axios.get('https://uinames.com/api/?ext')
  .then(r => r.data)
}
*/
import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  loadUsers () {
    let resource = Resource.resource(paths.api + '/auth/loadUsers')
    return resource.get()
  },

  loadUserByCpf (user) {
    let resource = Resource.resource(paths.api + '/auth/loadUserByCpf')
    return resource.save(user)
  },

  loadUserByLogin (login, password) {
    let resource = Resource.resource(paths.api + '/auth/loadUserByLogin/{/login}{/password}')
    return resource.get({ login: login, password: password })
  },

  loadProfilesByUserId (userId) {
    let resource = Resource.resource(paths.api + '/auth/loadProfilesByUserId/{/userId}')
    return resource.get({ userId })
  }
}

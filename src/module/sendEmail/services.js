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
  getUsers () {
    let resource = Resource.resource(paths.api + '/auth/users')
    return resource.get()
  },

  getUserByCpf (user) {
    let resource = Resource.resource(paths.api + '/auth/userByCpf')
    return resource.save(user)
  },

  getUserByPassword (login, password) {
    let resource = Resource.resource(paths.api + '/auth/userBypassword/{/login}{/password}')
    return resource.get({ login: login, password: password })
  },

  getProfilesByUser (userId) {
    let resource = Resource.resource(paths.api + '/auth/profilesByUser/{/userId}')
    return resource.get({ userId })
  }
}

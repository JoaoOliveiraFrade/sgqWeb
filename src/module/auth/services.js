import axios from '@/http/axios'

export const getUser = (login, password) => {
  return axios.get('https://uinames.com/api/?ext')
  .then(r => r.data)
}
/*
import Resource from '@/http/vueResource'
import { paths } from '@/environment'

export default {
  getUsers () {
    let resource = Resource.resource(paths.apiDefault + '/users')
    return resource.get()
  },

  getUserByCpf (login, cpf) {
    let resource = Resource.resource(paths.apiDefault + '/userByCpf{/login}{/cpf}')
    return resource.get({ login: login, cpf: cpf })
  },

  getUserByPassword (login, password) {
    let resource = Resource.resource(paths.apiDefault + '/userBypassword/{/login}{/password}')
    return resource.get({ login: login, password: password })
  }
}
*/

import axios from '@/http/axios'

export const getUser = (login, password) => {
  return axios.get('https://uinames.com/api/?ext')
  .then(r => r.data)
}
/*
import Resource from 'src/http/vueResource'
import webApiPath from 'src/http/webApiPath'

export default {
  getUsers () {
    let resource = Resource.resource(webApiPath.default + '/users')
    return resource.get()
  },

  getUserByCpf (login, cpf) {
    let resource = Resource.resource(webApiPath.default + '/userByCpf{/login}{/cpf}')
    return resource.get({ login: login, cpf: cpf })
  },

  getUserByPassword (login, password) {
    let resource = Resource.resource(webApiPath.default + '/userBypassword/{/login}{/password}')
    return resource.get({ login: login, password: password })
  }
}
*/

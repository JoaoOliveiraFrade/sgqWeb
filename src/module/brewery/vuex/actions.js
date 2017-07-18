// import * as types from './mutationsTypes'
// import { getUser } from '../services'

// export const tryLogon = (context, parameter) => {
//   console.log(parameter)
//   if (parameter.login === '' || (parameter.password === '' && parameter.cpf === '')) {
//     return Promise.reject('ssdsdfsd')
//   }

//   // services.getUserByCpf(payload.login, payload.password)
//   getUser('login', 'password')
//     .then(data => {
//       if (data !== null) {
//         context.commit(types.setToken, parameter.cpf)
//         context.commit(types.setUser, data)
//       }
//     })
// }


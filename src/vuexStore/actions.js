import * as types from './mutationsTypes'

export const setFeatureName = (context, parameter) => {
  if (parameter === '') {
    return Promise.reject('Nome da funcionalide vazia')
  }
  context.commit(types.setFeatureName, parameter)
}


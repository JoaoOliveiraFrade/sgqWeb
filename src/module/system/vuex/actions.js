import * as types from './mutationsTypes'
import services from '@/module/system/services'

export const loadDataFromCTAndDefec = ({ commit }) => {
  services.load()
  .then(
    r => {
      commit(types.dataFromCTAndDefec, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}

export const loadDataFromCTAndDefectGbyDevManuf = ({ commit }) => {
  services.dataFromCTAndDefectGbyDevManuf()
  .then(
    r => {
      commit(types.dataFromCTAndDefectGbyDevManuf, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}

export const loadDataFromCTAndDefectGbyTestManuf = ({ commit }) => {
  services.dataFromCTAndDefectGbyTestManuf()
  .then(
    r => {
      commit(types.dataFromCTAndDefectGbyTestManuf, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}

export const loadDataFromAgent = ({ commit }) => {
  commit(types.loading, true)
  services.dataFromAgent(parameter)
    .then(
      r => {
        commit(types.loadDataFromAgent, r.data)
        commit(types.loading, false)
      },
      e => {
        console.log(e)
        commit(types.loading, false)
      }
    )
}

export const loadDataFromAgentGbyDevManuf = ({ commit }) => {
  services.dataFromAgentGbyDevManuf()
  .then(
    r => {
      commit(types.dataFromAgentGbyDevManuf, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}

export const loadDataFromAgentGbyTestManuf = ({ commit }) => {
  services.dataFromAgentGbyTestManuf()
  .then(
    r => {
      commit(types.dataFromAgentGbyTestManuf, r.data)
      commit(types.loading, false)
    },
    e => {
      console.log(e)
      commit(types.loading, false)
    }
  )
}

export const setFilterDevManufs = ({ commit }, paramenter) => {
  commit(types.filterDevManufs, paramenter)
}

export const setSelected = ({ commit }) => {
  commit(types.selected, selectedSystems)
}

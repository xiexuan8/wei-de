import request from '@/utils/request'

export function getAllFormula() {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: 'http://localhost:9011/getAllFormula',
    method: 'get'
  })
}

export function selectOneFormula(FormulaCode) {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: 'http://localhost:9011/selectOneFormula',
    method: 'get',
    params: {FormulaCode}
  })
}

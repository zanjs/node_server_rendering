const fetch = require('../util/fetch.js')

module.exports = {
  getRisk (params = {}) {
    return fetch({
      url: 'http://47.93.185.26/risk/gzip/',
      method: 'post',
      data: params
    })
  }
}
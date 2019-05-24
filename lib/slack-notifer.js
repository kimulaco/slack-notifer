const axios = require('axios')

/**
 * SlackNotifer
 * @constructor
 */
class SlackNotifer {
  constructor () {
    this.optionNames = [
      'channel',
      'username',
      'icon',
      'text',
      'text'
    ]
  }

  /**
   * notify
   * @param {String} url
   * @param {Object} params
   * @return {Promise}
   */
  notify (url, params = {}) {
    return axios.post(url, params)
  }

  /**
   * parseParams
   * @param {Object} obj
   * @return {Object}
   */
  parseParams (obj) {
    let params = []

    this.optionNames.forEach((optionName) => {
      if (optionName === 'icon') {
        params[this.getIconParamKey(obj[optionName])] = obj[optionName]
      } else {
        params[optionName] = obj[optionName]
      }
    })

    return params
  }

  /**
   * getIconParamKey
   * @param {String} icon
   * @return {String}
   */
  getIconParamKey (icon) {
    if (icon[0] === ':') {
      return 'icon_emoji'
    } else {
      return 'icon_url'
    }
  }
}

module.exports = new SlackNotifer()

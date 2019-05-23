const axios = require('axios')

const options = [
  'channel',
  'username',
  'icon',
  'text',
  'text'
]

const getIconParamKey = (icon) => {
  if (icon[0] === ':') {
    return 'icon_emoji'
  } else {
    return 'icon_url'
  }
}

const parseParams = (obj) => {
  let params = []

  options.forEach((option) => {
    if (option === 'icon') {
      params[getIconParamKey(obj[option])] = obj[option]
    } else {
      params[option] = obj[option]
    }
  })

  return params
}

const notify = (url, params = {}) => {
  return axios.post(url, params)
}

exports.notify = notify
exports.parseParams = parseParams

module.exports = {
  extends: 'standard',
  settings: {
    node: {
      tryExtensions: [
        '.js',
        '.json',
        '.node'
      ]
    }
  },
  rules: {
    'no-return-await': 'off'
  },
}

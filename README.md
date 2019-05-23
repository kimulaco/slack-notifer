# slack-notifer

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## use

```js
const slackNotifer = require('./slack-notifer')

slackNotifer.notify(SLACK_WEBHOOK_URL, {
  channel: '#general',
  username: 'slack-notifer',
  text: 'This is test message.',
  icon_url: ICON_URL
})
```

## License

[MIT License](LICENSE)

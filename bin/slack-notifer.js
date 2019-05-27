#!/usr/bin/env node

const slackNotifer = require('../dist/slack-notifer')
const pkg = require('../package')
const program = require('commander')

program
  .version(pkg.version)
  .option('-c, --channel <value>', 'Channel name.', '')
  .option('-u, --username <value>', 'Username.', '')
  .option('-t, --text <value>', 'Message text.', '')
  .option('-i, --icon <value>', 'Icon URL or emoji.', '')
  .option('-l, --link_names <number>', 'Flag of whether to include menthion in message text.', 1)
  .parse(process.argv)

let webhookUrl = program.args[0]

slackNotifer.notify(
  webhookUrl,
  slackNotifer.parseParams(program)
).then((response) => {
  console.log(response)
}).catch((error) => {
  console.error(error)
})

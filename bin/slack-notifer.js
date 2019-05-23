#!/usr/bin/env node

const slackNotifer = require('../lib/slack-notifer')
const pkg = require('../package')
const program = require('commander')

program
  .version(pkg.version)
  .option('-c, --channel <value>', 'Channel name.', '')
  .option('-u, --username <value>', 'Username.', '')
  .option('-t, --text <value>', 'Message text.', '')
  .option('-i, --icon <value>', 'Icon URL or emoji.', '')
  .option('-l, --link_names <number>', 'Icon URL or emoji.', 1)
  .parse(process.argv)

let webhookUrl = program.args[0]

console.log(webhookUrl)
console.log(slackNotifer.parseParams(program))

slackNotifer.notify(
  webhookUrl,
  slackNotifer.parseParams(program)
)

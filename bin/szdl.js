#!/usr/bin/env node
'use strict'
const { program } = require('commander')

program
  .version(require('../package').version)

program.command('init <projectName>')
  .description('szdl-cli init')
  .alias('i')
  .action((projectName) => {
      require('../command/init')(projectName)
  })

program.parse(process.argv)

if(!program.args.length){
  program.help()
}
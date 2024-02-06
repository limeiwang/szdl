'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/limeiwang/szdl-vite.git'

module.exports = () => {
    let cmdStr = `git clone `+projectUrl

    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        console.log('初始化项目模板，成功了')
        process.exit()
    })
}
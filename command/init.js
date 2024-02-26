const download = require('download-git-repo')
const projectUrl = 'https://github.com:limeiwang/szdl-cli#main'

module.exports = (projectName) => {
  download(projectUrl, projectName, { clone: true }, (err) => {
    if (err) {
      console.log(err);
      console.log("下载失败");
    } else {
      console.log("下载成功");
    }
  })
}
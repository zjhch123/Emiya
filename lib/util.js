const fs = require('fs-extra');
const path = require('path');
const figlet = require('figlet');
const colors = require('colors');
const download = require('download-git-repo');

async function init(projectName) {
  const projectDir = path.join(process.cwd(), projectName);
  try {
    if (fs.existsSync(projectDir)) {
      console.log('Project is already existed!');
      return;
    }
    console.log('downloading template...');
    fs.ensureDirSync(projectDir);
    await _download('zjhch123/emiya-spa-template', projectDir);
    _success(projectName);
  } catch(exception) {
    console.error(exception);
  }
}

function _copy(srcPath, targetPath) {
  fs.readdirSync(srcPath).forEach((file) => {
    const pathName = path.join(srcPath, file);
    if (fs.statSync(pathName).isDirectory()) {
      const targetPath2 = path.join(targetPath, file);
      _copy(pathName, targetPath2);
    } else {
      fs.copy(pathName, path.join(targetPath, file));
    }
  });
}

function _success(filename) {
  const t = '                           ';
  figlet('^ Emiya >>>', (err, data) => {
    if (err) throw err;
    console.log(`\n${data}`)
    console.log('Emiya init success!\n');
    console.log('┌────────────────────────┐'.green);
    console.log(`│    cd ${filename + t.slice(0, 17 - filename.length)}│`.green);
    console.log(`│    npm i               │`.green);
    console.log(`│    npm run dev         │`.green);
    console.log(`│    npm run build       │`.green);
    console.log(`└────────────────────────┘`.green);
  })
}

function _download(project, destination) {
  return new Promise((res, rej) => {
    download(project, destination, function(err) {
      if (err) {
        rej(err);
        return;
      }
      res(project);
    });
  });
}

module.exports = {
  init: init
}
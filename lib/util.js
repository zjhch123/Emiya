const fs = require('fs-extra');
const path = require('path');
const figlet = require('figlet');
const download = require('download-git-repo');

const typeMapping = (type) => {
  switch (+type) {
    case 0:
      return 'spa'
    case 1:
      return 'node'
    case 2:
      return 'vue'
    case 3:
      return 'multiple'
    case 4:
      return 'pkg'
    default:
      return 'spa'
  }
}

/*
 * type = 0 webapp
 * type = 1 node app
 * type = 2 vue app
 * type = 3 multiple web app
 * type = 4 pkg starter
 */
function init(type) {
  return async function(projectName) {
    const projectDir = path.join(process.cwd(), projectName);
    try {
      if (fs.existsSync(projectDir)) {
        console.log('Project is already existed!');
        return;
      }
      console.log('downloading template...');
      fs.ensureDirSync(projectDir);
      await _download(`zjhch123/emiya-${typeMapping(type)}-template`, projectDir);
      _success(projectName, type);
    } catch(exception) {
      console.error(exception);
    }
  }
}

function _success(filename, type) {
  if (type === 4) {
    _pkgSuccess(filename)
    return
  }
  const t = '                                                ';
  figlet('^ Emiya >>>', (err, data) => {
    if (err) throw err;
    console.log(`\n${data}`)
    console.log('Emiya init success!\n');
    console.log('┌───────────────────────────────┐'.green);
    console.log(`│         cd ${filename + t.slice(0, 19 - filename.length)}│`.green);
    console.log(`│         npm i                 │`.green);
    console.log(`│         npm run dev           │`.green);
    console.log(`│         npm run ${type === 0 ? 'build' : 'start'}         │`.green);
    console.log(`└───────────────────────────────┘`.green);
  })
}

function _pkgSuccess(filename) {
  const t = '                                                ';
  figlet('^ Emiya >>>', (err, data) => {
    if (err) throw err;
    console.log(`\n${data}`)
    console.log('Emiya init success!\n');
    console.log('┌───────────────────────────────┐'.green);
    console.log(`│         cd ${filename + t.slice(0, 19 - filename.length)}│`.green);
    console.log(`│         npm i                 │`.green);
    console.log(`│         npm run create        │`.green);
    console.log(`│         npm run dev           │`.green);
    console.log(`│         npm run build         │`.green);
    console.log(`└───────────────────────────────┘`.green);
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
  initWeb: init(0),
  initNode: init(1),
  initVue: init(2),
  initMultiple: init(3),
  initPkg: init(4)
}
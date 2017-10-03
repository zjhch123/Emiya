'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
  appROOT: resolveApp(''),
  appNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
  appIndexHTML: resolveApp('src/index.html'),
  appBuildPath: resolveApp('build'),
  appIndexJS: resolveApp('src/App.js')
};

const fs = require('fs-extra');
const path = require('path');
const pluginExecuteCommand = require('./plugin-execute-command');
const cucumber = require('cypress-cucumber-preprocessor').default;

const cypressConfigResolverByFile = filename => {
  const pathToConfigFile = path.resolve(__dirname, `../config/${filename}.json`);
  return fs.readJsonSync(pathToConfigFile);
};

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  on('task', {
    pluginExecuteCommand
  });
  
  const file = cypressConfigResolverByFile(
    process.env.CYPRESS_TEST_ENV 
  );
  return file;
};



const fs = require("fs-extra");
const path = require("path");

const cypressConfigResolverByFile = filename => {
  const pathToConfigFile = path.resolve(__dirname, `${filename}.json`);
  return fs.readJsonSync(pathToConfigFile);
};
const cypressConfigResolver = () => {
  return cypressConfigResolverByFile(
    process.env.CYPRESS_TEST_ENV || "qa"
  );
};

module.exports.cypressConfigResolver = cypressConfigResolver;
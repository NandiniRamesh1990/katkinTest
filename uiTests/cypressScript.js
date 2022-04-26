const cypress = require('cypress');
const config = require("./cypress/config/" + process.env.CYPRESS_TEST_ENV + ".json");

// Get all spec files
const filesSpec = "./cypress/integration/features/**";

const CYPRESS_TAGS = process.env.GREP_TAG ?? "@smoke"

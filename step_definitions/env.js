const path = require('path');
const ROOT_PATH = path.resolve('./');
const {setDefaultTimeout} = require(ROOT_PATH + '/node_modules/cucumber');

setDefaultTimeout(100 * 10000);
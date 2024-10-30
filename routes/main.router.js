const { getFiles } = require("../common/common");

const routerFiles = getFiles(__dirname);
routerFiles.splice(routerFiles.indexOf("index.js"), 1);
routerFiles.splice(routerFiles.indexOf("main.router.js"), 1);

module.exports = routerFiles.map((path) => require(`./${path}`));

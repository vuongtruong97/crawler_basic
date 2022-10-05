const path = require('path')
require("dotenv").config({path:path.join(__dirname,'../.env')});
const { startBrowser } = require("./browser");
const { executesCrawler } = require("./crawController");
const {gracefullShutdown} = require('./utils/gracefullShutdown');

// start crawler
(async () => {
  try {
    const browserInstance = startBrowser();
    await executesCrawler(browserInstance);
  } catch (err) {
    console.log(err)
    logger.error(`${err.name} ${err.message}`);
    console.log("Something went wrong..., retry after some seconds 🐱‍🚀");
    setTimeout(() => {
      startCrawler();
    }, 120000);
  }
})();

// shutdown
process.on('SIGTERM', gracefullShutdown);
process.on('SIGINT',gracefullShutdown);
const puppeteer = require("puppeteer");
const { config } = require("./config/config");
const {logger} = require("./utils/logger");

async function startBrowser() {
  let browser;
  try {
    console.log("Opening the browser......");
    browser = await puppeteer.launch(config.launch);
  } catch (err) {
    logger.error(`Could not create a browser instance => : ${err}`);
  }
  return browser;
}

module.exports = {
  startBrowser,
};

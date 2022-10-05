const { saveFile, getData } = require("../utils/dataController");
const { logger } = require("../utils/logger");
const {fetchData} = require('../utils/fetchData')
const {SOCCER_DATA_FILE_NAME} = require('../constants/constants')



let URL = 'https://www.livescore.com/en/random/'
const API = 'https://prod-public-api.livescore.com/v1/api/app/date/soccer/20221005/7?MD=1'
const INTERVAL_TIME = 5000

const soccerCrawler = async (browserInstance) => {
    const browser = await browserInstance
    const page = await browser.newPage();
   try {
    console.log(`"Navigating to " ${URL}`);

    // disable page load unnessesary resource
    await page.setRequestInterception(true); 
      page.on("request", (req) => {
        if (req.resourceType() == "font" || req.resourceType() == "image") {
          req.abort();
        } else {
          req.continue();
        }
      });

    await page.goto(URL)

    // call soccer api with interval
    setInterval(async () => {

    console.time('Fetch Soccer API Times')

    const data = await fetchData(API)

    console.timeEnd('Fetch Soccer API Times')

    // save data to json or import to db
    saveFile(SOCCER_DATA_FILE_NAME,data.Stages)

    },INTERVAL_TIME)

   } catch (error) {
    throw error
   } 
}

module.exports = {soccerCrawler}
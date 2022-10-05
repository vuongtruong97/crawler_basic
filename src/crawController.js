const {soccerCrawler} = require('./crawler/soccerCrawler')

const executesCrawler = async (browserInstance) => {

  await soccerCrawler(browserInstance)

};

module.exports = { executesCrawler };

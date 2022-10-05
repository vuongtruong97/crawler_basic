const {sleep}  = require('./sleep')

const gracefullShutdown = async () => {
    await sleep(500)
    console.info('SIGTERM signal received.');
    process.exit(0);
  }

  module.exports  = {gracefullShutdown}
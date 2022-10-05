const winston = require("winston");
require("winston-mongodb");
const path = require("path");
const os = require('os')



const options = {
  info: {
    level: "info",
    filename: path.join(__dirname, "../logs/info.log"),
    handleExceptions: true,
    json: true,
    maxsize: 3145728, // 3MB
    maxFiles: 5,
    colorize: true,
  },
  error: {
    level: "error",
    filename: path.join(__dirname, "../logs/error.log"),
    handleExceptions: true,
    json: true,
    maxsize: 3145728, // 3MB
    maxFiles: 5,
    colorize: true,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  mongodbError: {
    level: "error",
    db: process.env.MONGODB,
    collection: "Logs",
    useUnifiedTopology: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.metadata(),
      winston.format.json()
    ),
  },
  mongodbInfo: {
    level: "info",
    db: process.env.MONGODB,
    collection: "Logs",
    useUnifiedTopology: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.metadata(),
      winston.format.json()
    ),
  },
};

const logger = winston.createLogger({
  defaultMeta:{hostName:os.hostname().toString()},
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.MongoDB(options.mongodbError),
    new winston.transports.MongoDB(options.mongodbInfo),
    new winston.transports.Console(options.console),
    new winston.transports.File(options.info),
    new winston.transports.File(options.error),
  ],
  exitOnError: false,
});



module.exports = { logger };

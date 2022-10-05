const fs = require("fs");
const path = require("path");
const { CRAW_DATA_DIR_NAME } = require("../constants/constants");

// create data directory
if (!fs.existsSync(path.join(__dirname, `../${CRAW_DATA_DIR_NAME}`))) {
  fs.mkdirSync(path.join(__dirname, `../${CRAW_DATA_DIR_NAME}`));
}

const saveFile = (fileName, data) => {
  return fs.writeFileSync(
    path.join(__dirname, `../${CRAW_DATA_DIR_NAME}/${fileName}.json`),
    JSON.stringify(data)
  );
};

const getData = (fileName) => {
  try {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, `../${CRAW_DATA_DIR_NAME}/${fileName}.json`),
        "utf8"
      )
    );
  } catch (error) {
    return [];
  }
};

const createIfNotExistDir = (dirName) => {
  if (!fs.existsSync(path.join(__dirname, `../${CRAW_DATA_DIR_NAME}/${dirName}`))) {
    fs.mkdirSync(path.join(__dirname, `../${CRAW_DATA_DIR_NAME}/${dirName}`));
  }
};

module.exports = { saveFile, getData, createIfNotExistDir };

const config = {
  launch: {
    ignoreHTTPSErrors: true,
    headless: true,
    devtools: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  viewport: { width: 1500, height: 10000, deviceScaleFactor: 1 },
};


module.exports = { config };

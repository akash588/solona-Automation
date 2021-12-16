const puppeteer = require("puppeteer");

const polygon = async function (link) {
    try {
  const args = ["--no-sandbox", "--disable-setuid-sandbox"];
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args,
    devtools: false,
    javaScriptEnabled: false,
    permissions: ["notifications"],
    locale: "en-US",
    // headless: false,
    ignoreDefaultArgs: ["--enable-automation", "--disable-infobars"],
    ignoreHTTPSErrors: true,
    timeout: 1000 * 60 * 5,
  });

  const page = await browser.newPage();

  await page.goto(
    link,
    {
      waitUntil: "domcontentloaded",
      timeout: 1000 * 40 * 2,
    }
  );
  await sleep(3000);
  let pages1 = await browser.pages();
  await pages1[0].close();

  await sleep(5000);
  let element1 = await page.$("#ContentPlaceHolder1_spanValue");
  await sleep(5000);
  let maticdata = await page.evaluate((el) => el.textContent, element1);
 
  const words = maticdata.split(' ');

   let matic = words[0]
  let maticValue = words[2].match(/\d+(?:\.\d+)?/g);
  
  let target = [];
  target.push({Matic: matic});
  target.push({MaticValue: maticValue});
  let element2 = await page.$("#ContentPlaceHolder1_spanTxFee");
  await sleep(5000);
  let maticTxFee = await page.evaluate((el) => el.textContent, element2);
  console.log(maticTxFee);
  target.push({maticTxFee: maticTxFee});
   console.log("target>>>",target)

  return target;
} catch (error) {
    console.error(error);
      return;
  }
};
module.exports = {
  polygon,
};

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

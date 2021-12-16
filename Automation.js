const puppeteer = require("puppeteer");

const gmailProcess = async function (link) {
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

  //   await page.click(
  //     "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div.sc-jcRCNh.jluERy > b > div > img"
  //   );
  await sleep(5000);
  if ((await page.$("#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div > b > div > img")) !== null) {
    await sleep(3000);
    await page.click("#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div > b > div > img");
  }
  if ((await page.$("#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div.sc-jcRCNh.jluERy > b > div > img")) !== null) {
  await page.waitForSelector(
    "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div.sc-jcRCNh.jluERy > b > div > img"
  );
  await page.click(
    "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div.sc-jcRCNh.jluERy > b > div > img"
  );
  }
  if ((await page.$("#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div:nth-child(1) > div.sc-iuGLgT.dYpLmi.dark-mode-box > div > b > div > img")) !== null) {
  await page.waitForSelector(
    "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div:nth-child(1) > div.sc-iuGLgT.dYpLmi.dark-mode-box > div > b > div > img"
  );
  await page.click(
    "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(7) > div.ant-col.ant-col-24.ant-col-md-19 > div:nth-child(1) > div.sc-iuGLgT.dYpLmi.dark-mode-box > div > b > div > img"
  );
  }
 
  await page.waitForSelector(
    "#root > section > main > div > article > div > div.ant-col.ant-col-24.ant-col-md-8 > form > span > div > span > input"
  );
  await page.type(
    "#root > section > main > div > article > div > div.ant-col.ant-col-24.ant-col-md-8 > form > span > div > span > input",
    ""
  );
  await page.keyboard.down("Control");
  await page.keyboard.press("V");
  await page.keyboard.up("Control");
 const a = await page.evaluate(() =>    document.querySelector(".ant-input").getAttribute("value") )
  //   document.querySelector("#root > section > main > div > article > div > div.ant-col.ant-col-24.ant-col-md-8 > form > span > div > span > input").value

  // await browser.close();
  console.log(a)
  
  return a;
} catch (error) {
  console.error(error);
    return;
}
};



const gmailProcess1 = async function (link) {
try{
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
   

  await page.waitForSelector(
    "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(5) > div.ant-col.ant-col-24.ant-col-md-19 > div > div > div:nth-child(2) > div > a:nth-child(2) > img"
  );
  await page.click(
    "#rc-tabs-0-panel-1 > section:nth-child(1) > div > div:nth-child(5) > div.ant-col.ant-col-24.ant-col-md-19 > div > div > div:nth-child(2) > div > a:nth-child(2) > img"
  );
  
  await page.waitForSelector(
    "#root > section > main > div > article > div > div.ant-col.ant-col-24.ant-col-md-8 > form > span > div > span > input"
  );
  await page.type(
    "#root > section > main > div > article > div > div.ant-col.ant-col-24.ant-col-md-8 > form > span > div > span > input",
    ""
  );
  await page.keyboard.down("Control");
  await page.keyboard.press("V");
  await page.keyboard.up("Control");
 const a = await page.evaluate(() =>    document.querySelector(".ant-input").getAttribute("value") )
console.log(a)
 
} catch (error) {
  console.error(error);
    return;
}
  
  return a;
};

module.exports = {
  gmailProcess1,
  gmailProcess,
};

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

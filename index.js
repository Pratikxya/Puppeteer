import Puppeteer from "puppeteer";

(async () => {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.collegenote.net/courses/TU/CSIT/");

  const getDimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
  });

  console.log(getDimensions);

  await browser.close();
})();

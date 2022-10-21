import Puppeteer from "puppeteer";

(async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");

  await page.click("a[href='/login']");

  //   await browser.close();
})();

import Puppeteer from "puppeteer";

(async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");

  await page.click("a[href='/login']");

  await page.type("#username", "admin");
  await page.type("#password", "admin");

  //   await browser.close();
})();

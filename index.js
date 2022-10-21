import Puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();
const username = process.env.MYNAME;
const password = process.env.PASSWORD;

(async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");

  await page.click("a[href='/login']");

  await page.type("#username", username);
  await page.type("#password", password);
})();

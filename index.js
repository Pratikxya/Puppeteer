import Puppeteer from "puppeteer";

(async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://hamropasal.42web.io/");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();

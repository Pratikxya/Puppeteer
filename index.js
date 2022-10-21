import Puppeteer from "puppeteer";

(async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.collegenote.net/courses/TU/CSIT/", {
    waitUntil: "load",
    // Remove the timeout
    timeout: 0,
  });
  await page.pdf({ path: "Collegenotes.pdf", format: "A4" });
  await browser.close();
})();

import Puppeteer from "puppeteer";

(async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");
  //   await page.screenshot({ path: "example.png" });

  const grabQuotes = await page.evaluate(() => {
    const quotes = document.querySelectorAll(".quote");
    let quotesArr = [];
    quotes.forEach((quoteTag) => {
      const quoteInfo = quoteTag.querySelectorAll("span");
      const actualQuote = quoteInfo[0];
      const actualAuthor = quoteInfo[1];

      const authorName = actualAuthor.querySelector("small");

      quotesArr.push({
        quote: actualQuote.innerText,
        author: authorName.innerText,
      });
    });
    return quotesArr;
  });
  console.log(grabQuotes);
  await browser.close();
})();

//packages
import Puppeteer from "puppeteer";
import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.tuiost.edu.np/notices";

async function scrape() {
  //fetching data
  const data = await axios.get(url);

  //loading data into cheerio
  const $ = cheerio.load(data.data);

  const listItems = $(".mt-3");
  console.log(listItems.length);
  listItems.each(function (idx, el) {
    const title = $(el).children("a").text();
    const date = $(el).children("small").text();
    const link = $(el).children("a").attr("href");

    console.log(title);
    console.log(date);
    console.log(link);
  });
}
scrape();

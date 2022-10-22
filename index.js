import Puppeteer from "puppeteer";
import axios from "axios";
import cheerio from "cheerio";
const url = "https://www.tuiost.edu.np/notices";
const scrape = async () => {
  //fetching data
  const data = await axios.get(url);
  //loading data into cheerio
  const $ = cheerio.load(data.data);
  const listItems = $(".mt-3");
  console.log(listItems.length);
  const notices = [];

  listItems.each((idx, el) => {
    const title = $(el).children("a").children("b").text();
    const date = $(el).children("small").text();
    const link = $(el).children("a").attr("href");

    const notice = {
      title,
      date,
      link,
    };
    notices.push(notice);
  });
  console.log(notices);
};
scrape();

//packages
import Puppeteer from "puppeteer";
import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.tuiost.edu.np/notices";

async function scrape() {
  //fetching data
  const data = await axios.get(url);
  // console.log(data);

  //loading
  const $ = cheerio.load(data.data);

  const res = $(`.mt-3`).text();
  console.log(res);
}

scrape();

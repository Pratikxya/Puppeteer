//packages
import Puppeteer from "puppeteer";
import axios from "axios";
import cheerio from "cheerio";

const url = "http://hamropasal.42web.io/product/boncellensis-secullant/";

const product = { name: "", price: "", link: "" };

async function scrape() {
  //fetching data
  const { data } = await axios.get(url);

  //load up the html
  const $ = cheerio.load(data);

  //Extract the data that we need
  product.name = $().find("h1").text();
  console.log(product);
}

scrape();

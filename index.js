const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin());
const locateChrome = require('chrome-location');
const {executablePath} = require('puppeteer');

const url_16 = "https://www.apple.com/shop/buy-iphone/iphone-16?afid=p238%7Cspt9IANwA-dc_mtid_20925d2q39172_pcrid_719078865286_pgrid_167776336472_pntwk_g_pchan__pexid__ptid_kwd-2187367930314_&cid=wwa-us-kwgo-iphone--slid---NonCore-iPhone16-us_iphone_airefresh_102824-"

async function givePage() 
{
    const browser = await puppeteer.launch({headless: false, executablePath: locateChrome});
    let page = await browser.newPage();
    return page
}

async function run() 
{
    let page = await givePage();
    await page.goto(url_16);
    await add_to_cart(page)
}

async function add_to_cart(page) 
{
    selector = "input[data-autom='dimensionScreensize6_3inch']"
    await page.waitForSelector(selector)

    await page.evaluate(() => {document.querySelector("input[data-autom='dimensionScreensize6_3inch']").click()})
}

run();
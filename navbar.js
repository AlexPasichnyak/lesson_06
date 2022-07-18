const puppeteer = require('puppeteer');

try {
  (async () => {
    const browser = await puppeteer.launch({ devtools: true });
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/');
    await page.waitForSelector('.navbar-sidebar__backdrop');
    await page.$eval(
      'nav.navbar',
      (el) => { el.style.backgroundColor = '#1F54C0'; },
    );

    await page.screenshot({
      path: './screenshots/screenshot.png',
    });

    await browser.close();
  })();
} catch (err) {
  console.error(err);
}

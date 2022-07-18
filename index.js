const puppeteer = require('puppeteer');

try {
  (async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/');
    await page.waitForTimeout(1000);
    await page.type('input.navbar__search-input', 'pdf', { delay: 300 });
    await page.keyboard.press('Enter', { delay: 300 });
    await page.pdf({
      path: './screenshots/screenshot.pdf',
      format: 'a3',
      printBackground: true,
    });

    await browser.close();
  })();
} catch (err) {
  console.error(err);
}

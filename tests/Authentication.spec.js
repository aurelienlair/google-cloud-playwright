/* eslint-disable no-undef */
require('playwright');

describe('Authentication Test Suite', () => {
  it('Authentication', async () => {
    await page.goto('https://localcoding.us/user/login', {
      waitUntil: 'networkidle0',
    });
  });

  it('Log in successfully with valid credentials', async () => {
    await page.waitForSelector('input[id="normal_login_email"]', {
      visible: true,
    });
    await page.type('input[id="normal_login_email"]', 'example@mail.com');
    await page.waitForSelector('input[id="normal_login_password"]', {
      visible: true,
    });
    await page.type('input[id="normal_login_password"]', 'supersecretpassword');
    await page.waitForSelector('button[type="submit"]', {
      visible: true,
    });
    await page.click('button[type="submit"]');
  });
});

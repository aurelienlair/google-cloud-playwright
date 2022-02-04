const chromium = require('chrome-aws-lambda');

switch (process.env.BROWSER) {
  case 'chromium':
    module.exports = async () => {
      const path = await chromium.executablePath;
      const executablePath = process.platform === 'linux' ? path : '';
      return {
        browsers: [process.env.BROWSER],
        exitOnPageError: false,
        launchType: 'LAUNCH',
        launchOptions: {
          executablePath,
          headless: false,
          args: [
            '--allow-no-sandbox-job',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
          ],
        },
      };
    };
    break;

  default:
    module.exports = async () => {
      const path = await chromium.executablePath;
      const executablePath = process.platform === 'linux' ? path : '';
      return {
        browsers: [process.env.BROWSER],
        exitOnPageError: false,
        launchType: 'LAUNCH',
        launchOptions: {
          executablePath,
          headless: true,
          args: [
            '--allow-no-sandbox-job',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
          ],
        },
      };
    };
}

import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',
  //Maximun time one test can run for
  timeout: 120*1000,

  // Run all tests in parallel.
  fullyParallel: true,

  // Reporter to use
  reporter: 'html',

  /*use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://127.0.0.1:3000',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },*/
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
    },
  ],
  /*// Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },*/
};
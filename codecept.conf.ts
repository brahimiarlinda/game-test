import { devices } from 'playwright';

import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      emulate: devices['Galaxy S8'], // Emulate Samsung Galaxy S8
      url: 'https://games.lotto24.de',
      show: false,
      keepCookies: true
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file',
    Cookies: './support/components/Cookies.ts',
    LandingPage: './support/page-objects/LandingPage.ts',
    GamePage: './support/page-objects/GamePage.ts',
    HelpPage: './support/page-objects/HelpPage.ts'
  },
  plugins: {
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: 'tstmt_k0MxTKm8wzrZv8TzMAXlS-b262YEMPdlqg1716626255',
    }
  },
  name: 'game-test'
}

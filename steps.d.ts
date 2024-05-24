/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type Cookies = typeof import('./support/components/Cookies');
type LandingPage = typeof import('./support/page-objects/LandingPage');
type GamePage = typeof import('./support/page-objects/GamePage');
type HelpPage = typeof import('./support/page-objects/HelpPage');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    current: any,
    Cookies: Cookies,
    LandingPage: LandingPage,
    GamePage: GamePage,
    HelpPage: HelpPage
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

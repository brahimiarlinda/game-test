import {backToGameButton} from "./support/page-objects/HelpPage";

const {I, Cookies, LandingPage, GamePage, HelpPage} = inject();
const baseUrl = 'https://games.lotto24.de';

Feature('sample');

Scenario('I can navigate from the game page, to the help page and back to the game page',  async () => {
    I.say(`I am on the landing page ${baseUrl}`);
    I.amOnPage('/');

    I.say('I accept the cookies')
    I.click(Cookies.acceptAllCookiesButton);

    I.say('I verify that the “ZEAL Instant Games” teaser section is present ');
    I.waitForVisible(LandingPage.instantGamesTeaser);

    I.say('I scroll to the instant games and click on the third one');
    I.scrollTo(LandingPage.instantGamesSection);
    I.click(LandingPage.thirdInstantGame);

    I.say('I verify the title of the third instant game is Hamburg Heist');
    const titleOfGame = await I.grabTextFrom(LandingPage.titleOfThirdGame);
    I.assertEqual(titleOfGame, "Hamburg Heist", "The title of the 3rd game should be Hamburg Heist!");

    I.say('I verify that the correct game page is opened / loaded')
    I.seeCurrentUrlEquals(`${baseUrl}/games/hamburgheist?teaserId=28078`);

    I.say('I verify that the correct help link “Zur [game name] Hilfe” is on the page');
    I.see('Zur Hamburg Heist Hilfe');

    I.say('I click on the help link');
    I.click(GamePage.helpLink);

    I.say('I verify that the help page of the respective game is opened');
    I.seeCurrentUrlEquals(`${baseUrl}/hilfe/games/hamburgheist`);
    I.see('Hilfe');
    I.see('Hamburg Heist');

    I.say('I verify that the correct game is selected in the combo box on the help page');
    const selectedGame = await I.grabValueFrom(HelpPage.selectedGameInDropdown);
    I.assertEqual(selectedGame, "gahamburgheist", "The select box should have gahamburgheist selected!");

    I.say('I verify that the button on the help page links back to the correct game');
    I.click(HelpPage.backToGameButton);
    I.seeCurrentUrlEquals(`${baseUrl}/games/hamburgheist`);
    I.see('Hamburg Heist');
});

Scenario('I can navigate from the game page to the help page',  async () => {
    I.say(`I am on the landing page ${baseUrl}`);
    I.amOnPage('/');

    I.say('I accept the cookies')
    I.click(Cookies.acceptAllCookiesButton);

    I.say('I scroll to the instant games and click on the third one');
    I.scrollTo(LandingPage.instantGamesSection);
    I.click(LandingPage.thirdInstantGame);

    I.say('I verify that the correct help link “Zur Hamburg Heist Hilfe” is on the page');
    I.see('Zur Hamburg Heist Hilfe');

    I.say('I click on the help link');
    I.click(GamePage.helpLink);

    I.say('I verify that the help page of the respective game is opened');
    I.seeCurrentUrlEquals(`${baseUrl}/hilfe/games/hamburgheist`);
    I.see('Hilfe');
    I.see('Hamburg Heist');

    I.say('I verify that the correct game is selected in the combo box on the help page');
    const selectedGame = await I.grabValueFrom(HelpPage.selectedGameInDropdown);
    I.assertEqual(selectedGame, "gahamburgheist", "The select box should have gahamburgheist selected!");
});

Scenario('I can navigate from the help page back to the respective game',  async () => {
    I.say(`I am on the landing page ${baseUrl}`);
    I.amOnPage('/');

    I.say('I accept the cookies')
    I.click(Cookies.acceptAllCookiesButton);

    I.say('I scroll to the instant games and click on the third one');
    I.scrollTo(LandingPage.instantGamesSection);
    I.click(LandingPage.thirdInstantGame);

    I.say('I click on the help link');
    I.click(GamePage.helpLink);
    
    I.say('I verify that the button on the help page links back to the correct game');
    I.click(HelpPage.backToGameButton);
    I.seeCurrentUrlEquals(`${baseUrl}/games/hamburgheist`);
    I.see('Hamburg Heist');
});


const { I } = inject();

export const cookiesAcceptButton1 = '.sheet [data-element-id="buttonContent"]';
export const cookiesAcceptButton2 = '[data-element-id="cookieConsent"] [data-element-id="buttonContent"]';
export const cookiesClickButton2 = '[data-element-id="cookiesDisclaimerButton"]';
export const acceptAllCookiesButton = "//button[.//span[text()='Alle akzeptieren']]";

export const acceptCookiesIfExist = async () => {
    I.wait(3);
    const numberOfVisibleAcceptCookiesButton = await I.grabNumberOfVisibleElements(acceptAllCookiesButton);

    if( numberOfVisibleAcceptCookiesButton > 0 ){
        I.click(acceptAllCookiesButton);
    }
};

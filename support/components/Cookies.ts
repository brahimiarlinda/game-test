const { I } = inject();

export const cookiesAcceptButton1 = '.sheet [data-element-id="buttonContent"]';
export const cookiesAcceptButton2 = '[data-element-id="cookieConsent"] [data-element-id="buttonContent"]';
export const cookiesClickButton2 = '[data-element-id="cookiesDisclaimerButton"]';

export async function acceptCookies() {
    const cookiesAcceptButtonExists1 = await I.grabNumberOfVisibleElements(cookiesAcceptButton1) > 0;
    const cookiesAcceptButtonExists2 = await I.grabNumberOfVisibleElements(cookiesAcceptButton2) > 0;

    if (cookiesAcceptButtonExists1) {
        I.click(cookiesAcceptButton1);
    }

    if (cookiesAcceptButtonExists2) {
        I.click(cookiesClickButton2);
    }
}

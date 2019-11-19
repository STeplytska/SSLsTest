import {validUser} from 'src/data/CreateUsers';
import HomePage from 'src/pages/HomePage';
import LoginPage from 'src/pages/LogInPage';

export default class Utils {

    static loginToSite() {
        const basePage = new HomePage();
        basePage.open;
        basePage.loginButton.waitForDisplayed();
        basePage.loginButton.click();
        LoginPage.loginWithCredentials(validUser.email, validUser.password);
    }

    static checkContains(list, str) {
        let result: boolean = true;
        for (const element of list) {
            result = result && element.getText().toUpperCase().includes(str);
        }
        return result;
    }

    static getTextFromBox(webElement) {
        webElement.waitForDisplayed();
        return webElement.getText();
    }
}

import {validUser} from 'src/config/CreateUsers';
import BasicAuthPage from 'src/pages/BasicAuthPage';
import LoginPage from 'src/pages/LogInPage';
import ProfilePage from 'src/pages/ProfilePage';

export default class Utils {
    get profileCurrent(): () => (any | string | null)[] {
        return this._profileCurrent;
    }

    private _profileCurrent = ProfilePage.profileCurrent;
    // loginToSite(){
    //     BasicAuthPage.open;
    //     BasicAuthPage.loginButton.click();
    //     LoginPage.loginWithCredentials(validUser.email, validUser.password);
    // }

    static loginToSite() {
        const basePage = new BasicAuthPage();
        basePage.open;
        basePage.loginButton.waitForDisplayed();
        basePage.loginButton.click();
        LoginPage.loginWithCredentials(validUser.email, validUser.password);
    }

    static checkContains(list, str) {
        let result: boolean = true;
        for (let element of list) {
            result = result && element.getText().toUpperCase().includes(str);
        }
        return result;
    }
}

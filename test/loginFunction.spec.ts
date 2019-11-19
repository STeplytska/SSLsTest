import {expect} from 'chai';
import {inValidUser, userNotRegistered, userWithEmptyCredentials, validUser} from 'src/data/CreateUsers';
import AuthPage from 'src/pages/AuthPage';
import LoginPage from 'src/pages/LogInPage';
import Utils from 'src/Utils/Utils';

describe('Login page', () => {
    const basePage = new AuthPage();

    it('should not allow access with empty credentials', () => {
        LoginPage.setCredentials(userWithEmptyCredentials.email, userWithEmptyCredentials.password);
        LoginPage.showPassword.click();
        expect(LoginPage.password.getValue(),
            'Password does not be displayed after click "eye" icon or does not match input value')
                      .to.equals(userWithEmptyCredentials.password);
        LoginPage.submit.click();
        expect(LoginPage.isOpened,'Login page was not opened').true;
        expect(Utils.getTextFromBox(LoginPage.boxErrorEmail),
            'Error message is not displayed or not match require1').to.equals(userWithEmptyCredentials.message);
        expect(Utils.getTextFromBox(LoginPage.boxErrorPassword)).to.equals(userWithEmptyCredentials.messagePass,
                                    'Error message is not displayed or not match require');
    });

    it('should not allow access not registered user', () => {
        LoginPage.loginWithCredentials(userNotRegistered.email, userNotRegistered.password);
        expect(LoginPage.isOpened, 'Login page was not opened').true;
        expect(Utils.getTextFromBox(LoginPage.boxNotyMessage),
            'Error message is not displayed or not match require').to.equals(userNotRegistered.message);
    });

    it('should allow access with correct credentials', () => {
        LoginPage.setCredentials(validUser.email, validUser.password);
        LoginPage.showPassword.click();
        expect(LoginPage.password.getValue()).to.equals(validUser.password,
            'Password does not be displayed after click "eye" icon or does not match input value');
        LoginPage.submit.click();
        expect(basePage.authPageIsOpened, 'Authorized page was not opened').true;
        expect(basePage.authPageIsOpened).exist;
        expect(basePage.profileUser.getText()).to.equals(validUser.email, 'Does not match expected user name');
        expect(basePage.profileDropdown.getAttribute('nc-dropdown-trigger'))
                .to.equals('statusOpened', 'Dropdown was not opened');
        basePage.clickLogOut();
        expect(basePage.basePageIsOpened, 'Home page was not opened').true;
    });

    it('should not allow access with invalid email', () => {
        expect(LoginPage.isOpened, 'Login page was not opened').true;
        LoginPage.loginWithCredentials(inValidUser.email, inValidUser.password);
        expect(LoginPage.isOpened, 'Login page was not opened').true;
        expect(Utils.getTextFromBox(LoginPage.boxErrorEmail)).to.equals(inValidUser.message,
                            'Error message is not displayed or not match require');
    });

    it('Log Out. Should redirected on authorization page', () => {
        Utils.loginToSite();
        expect(basePage.authPageIsOpened, 'Authorized page was not opened').true;
        basePage.clickLogOut();
        expect(LoginPage.isOpened, 'Home page was not opened');
    });

    beforeEach(() => {
        basePage.open;
        expect(basePage.basePageIsOpened, 'Home page was not opened').true;
        basePage.loginButton.click();
        expect(LoginPage.isOpened, 'Login page was not opened').true;
    });
    afterEach(() => {
        browser.refresh();
    });
});
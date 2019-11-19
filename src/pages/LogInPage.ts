import BasePage from 'src/pages/BasePage';

class LoginPage extends BasePage {

    get pageTitle() {
        return $('.page-title').getText();
    }

    get email() {
        return $('[ng-model=\'form.email\']');
    }

    get password() {
        return $('[ng-model=\'form.password\']');
    }

    get showPassword() {
        return $('.btn-input');
    }

    get submit() {
        return $('.btn.primary');
    }

    get forgot() {
        return $('[click-and-disable=\'resetPassword(authForm)\']');
    }

    get boxErrorEmail() {
        return $('div[class=left-tooltip-box]');
    }

    get boxErrorPassword() {
        return $('div:nth-child(3) > div > div.left-tooltip-box');
    }

    get boxNotyMessage() {
        return $('.noty_message');
    }

    get open() {
        return browser.url('/authorize');
    }

    setCredentials(username, password) {
        this.email.setValue(username);
        this.password.setValue(password);
    }

    loginWithCredentials(username, password) {
        this.email.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }

    get isOpened() {
        this.submit.waitForDisplayed();
        return (this.pageTitle.includes('Authorization') && this.submit.isDisplayed());
    }
}

export default new LoginPage();

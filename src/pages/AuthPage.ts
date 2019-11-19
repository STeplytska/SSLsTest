import HomePage from 'src/pages/HomePage';

export default class AuthPage extends HomePage {

    get profileUser() {
        return $('.user-btn');
    }

    get profileDropdown() {
        return $('.dropdown-btn');
    }

    get profileLogOut() {
        return $('[ng-click="$ctrl.logout()"]');
    }

    clickLogOut() {
        this.profileDropdown.click();
        this.profileLogOut.click();
    }

    get authPageIsOpened() {
        this.profileUser.waitForDisplayed();
        return this.profileUser.isDisplayed(), this.profileDropdown.isDisplayed();
    }
}

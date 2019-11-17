import BasicAuthPage from 'src/pages/BasicAuthPage';

class DropdownPage extends BasicAuthPage {

    get profileLogOut() {
        return $('[ng-click="$ctrl.logout()"]');
    }

    get viewProfile() {
        return $('[href="/user/profile"]');
    }

    clickLogOut() {
        this.profileDropdown.click();
        this.profileLogOut.click();
    }

    clickViewProfile() {
        this.profileDropdown.click();
        this.viewProfile.doubleClick();
    }
}

export default new DropdownPage();

import BasePage from 'src/pages/BasePage';

export default class HomePage extends BasePage {

    get buttonMagnifier() {
        return $('.btn.flat-dark.icon-search');
    }

    clickButtonMagnifier() {
        this.buttonMagnifier.click();
    }

    get searchField() {
        return $('.icon-search');
    }

    get buttonBasicFast() {
        const xpath = String("//input[@id='checkbox-11']/parent::div");
        return $(xpath);
    }

    get buttonCOLOR() {
        const xpath = String("//input[@id='checkbox-11']/parent::div");
        return $(xpath).getCSSProperty('backgroud-color');
    }

    get buttonBusiness() {
        const xpath = String("//input[@id='checkbox-13']/parent::div");
        return $(xpath);
    }

    get buttonOneSite() {
        const xpath = String("//input[@id='checkbox-14']/parent::div");
        return $(xpath);
    }

    get filteredListValidation() {
        return $$('div.ssls-product-card__body-content > p:nth-child(2)');
    }

    get filteredListSubdomains() {
        return $$('div.ssls-product-card__body-content > p:nth-child(1)');
    }

    clickButtonBasicFast() {
        this.buttonBasicFast.click();
    }

    clickButtonBusiness() {
        this.buttonBusiness.click();
    }

    clickButtonOneSite() {
        this.buttonOneSite.click();
    }

    get loginButton() {
        return $('.btn.flat-dark.ng-scope');
    }

    // // @ts-ignore
    // get profileUser() {
    //     return $('.user-btn');
    // }
    //
    // // @ts-ignore
    // get profileDropdown() {
    //     return $('.dropdown-btn');
    // }
    //
    // // @ts-ignore
    // get profileLogOut() {
    //     return $('[ng-click="$ctrl.logout()"]');
    // }
    //
    // clickLogOut() {
    //     this.profileDropdown.click();
    //     this.profileLogOut.click();
    // }

    get open() {
        return browser.url('/');
    }

    // get authPageIsOpened() {
    //     this.profileUser.waitForDisplayed();
    //     return this.profileUser.isDisplayed(), this.profileDropdown.isDisplayed();
    // }

    get basePageIsOpened() {
        this.loginButton.waitForDisplayed();
        return (this.searchField.isDisplayed() && this.loginButton.isDisplayed());
    }
}

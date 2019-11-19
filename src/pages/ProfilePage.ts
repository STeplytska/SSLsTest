import {usersProfile} from 'src/data/CreateUsers';
import BasePage from 'src/pages/BasePage';

class ProfilePage extends BasePage {
    get open() {
        return browser.url('/user/profile');
    }

    get descriptionName() {
        return $('span[ng-hide="activeRow === \'name\'"]');
    }

    get descriptionEmail() {
        return $('span[ng-hide="activeRow === \'email\'"]');
    }

    get descriptionPassword() {
        return $('span[ng-hide="activeRow === \'password\'"]');
    }

    get descriptionPhone() {
        return $('span[ng-hide="activeRow === \'phone\'"]');
    }

    get descriptionAddress() {
        return $('span[ng-hide="activeRow === \'address\'"]');
    }

    get descriptionSupportPin() {
        return $('div[ng-class="{disabled: activeRow !== \'pin\' && activeRow !== \'all\'}"] span.ng-binding');
    }

    get refreshSupportPin() {
        return $('button[name="supportPin"]');
    }

    get descriptionNewsletter() {
        return $('button.toggle-btn');
    }

    isOpened() {
        const newVar: boolean = this.title.includes('Profile')
            && this.descriptionName.isDisplayedInViewport()
            && this.descriptionEmail.isDisplayedInViewport()
            && this.descriptionPassword.isDisplayedInViewport()
            && this.descriptionPhone.isDisplayedInViewport()
            && this.descriptionAddress.isDisplayedInViewport()
            && this.descriptionNewsletter.isDisplayed();
        return newVar;
    }

    profileCurrent() {
        return [this.descriptionName.getText(),
                this.descriptionEmail.getText(),
                this.descriptionPhone.getText(),
                this.descriptionAddress.getText(),
                this.descriptionNewsletter.getAttribute('class')];
    }

    compareValues() {
        let varNew = true;
        for (let item of this.profileCurrent()) {
            varNew = varNew && usersProfile.includes(item);
        }
        return varNew;
    }
}

export default new ProfilePage();

import {expect} from 'chai';
import AuthPage from 'src/pages/AuthPage';
import DropdownPage from 'src/pages/DropdownPage';
import ProfilePage from 'src/pages/ProfilePage';
import Utils from 'src/Utils/Utils';

describe('My profile page. Checking edit and refresh functions', () => {
    const basePage = new AuthPage();

    it('Client area. All preset value in fields should be displayed on the opened "Profile" page', () => {
        expect(ProfilePage.descriptionPassword.getText().length > 0, 'Field "Password" is empty').true;
        expect(ProfilePage.descriptionSupportPin.getText().length > 0, 'Field "SupportPin" is empty').true;
        expect(ProfilePage.descriptionNewsletter.getAttribute('class').includes('toggle-btn'),
                'Newsletter button does not according preset value').true;
        expect(ProfilePage.compareValues(), 'Not all of parameters is equals precondition value').true;
    });

    it('Should allow refresh support pin', () => {
        const oldSupportPin = ProfilePage.descriptionSupportPin.getText();
        ProfilePage.refreshSupportPin;
        const newSupportPin = ProfilePage.descriptionSupportPin.getText();

        expect(oldSupportPin === newSupportPin, 'Support pin was not refresh').true;
    });

    beforeEach(() => {
        Utils.loginToSite();
        expect(basePage.authPageIsOpened, 'Home page was NOT opened').true;
        DropdownPage.clickViewProfile();
        expect(ProfilePage.isOpened(), 'Profile page was NOT opened').true;
    });

    afterEach(() => {
        basePage.clickLogOut();
        browser.refresh();
    });
});
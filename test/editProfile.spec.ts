import {expect} from 'chai';
import BasicAuthPage from 'src/pages/BasicAuthPage';
import DropdownPage from 'src/pages/DropdownPage';
import ProfilePage from 'src/pages/ProfilePage';
import Utils from 'src/Utils/Utils';

describe('My profile page. Checking edit and refresh functions', () => {
    const basePage = new BasicAuthPage();

    it('Client area. All preset value in fields should be displayed on the opened "Profile" page', () => {
        expect(ProfilePage.descriptionPassword.getText().length > 0, 'Field "Password" empty').true;
        expect(ProfilePage.descriptionSupportPin.getText().length > 0, 'Field "SupportPin" empty').true;
        expect(ProfilePage.descriptionNewsletter.getAttribute('class').includes('toggle-btn on')); //'on' ????
        expect(ProfilePage.compareValues(), 'Not all of parameters is equals precondition value').true;
    });

    it('Should allow refresh support pin', () => {
        let oldSupportPin = ProfilePage.descriptionSupportPin.getText();
        console.log('oldSupportPin: ' + oldSupportPin);
        ProfilePage.refreshSupportPin;
        let newSupportPin = ProfilePage.descriptionSupportPin.getText();
        console.log('oldSupportPin: ' + newSupportPin);

        expect(oldSupportPin === newSupportPin, 'Support pin was not refresh').true;
    });

    beforeEach(() => {
        console.log('RUN before test PROFILE');
        Utils.loginToSite();
        expect(basePage.authPageIsOpened, 'Base page was NOT opened').true;
        DropdownPage.clickViewProfile();
        expect(ProfilePage.isOpened(), 'Profile page was NOT opened').true;
    });

    afterEach(() => {
        basePage.clickLogOut();
        browser.refresh();
    });
});
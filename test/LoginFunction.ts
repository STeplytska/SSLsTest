// import {expect} from 'chai';
// import {userNotRegistered, validUser, inValidUser, userWithEmptyCredentials} from 'src/config/CreateUsers';
// import BasicAuthPage from 'src/pages/BasicAuthPage';
// import LoginPage from 'src/pages/LogInPage';
// import DropdownPage from 'src/pages/DropdownPage';
// import Utils from 'src/Utils/Utils';
//
//
// describe('Login page', () => {
//     const basePage = new BasicAuthPage();
//
//     it('should not allow access with empty credentials', () => {
//         console.log('START1');
//         LoginPage.setCredentials(userWithEmptyCredentials.email, userWithEmptyCredentials.password);
//         LoginPage.showPassword.click();
//         expect(LoginPage.password.getValue()).to.equals(userWithEmptyCredentials.password);
//         LoginPage.submit.click();
//         expect(LoginPage.isOpened).true;
//         expect(LoginPage.boxErrorEmail.getText()).to.equals(userWithEmptyCredentials.message);
//         expect(LoginPage.boxErrorPassword.getText()).to.equals(userWithEmptyCredentials.messagePass);
//     });
//
//     it('should not allow access not registered user', () => {
//         console.log('START2');
//         LoginPage.loginWithCredentials(userNotRegistered.email, userNotRegistered.password);
//         expect(LoginPage.isOpened).true;
//         expect(LoginPage.boxNotyMessage.getText()).to.equals(userNotRegistered.message);
//     });
//
//     it('should allow access with correct credentials', () => {
//         console.log('START3');
//         LoginPage.setCredentials(validUser.email, validUser.password);
//         LoginPage.showPassword.click();
//         expect(LoginPage.password.getValue()).to.equals(validUser.password);
//         LoginPage.submit.click();
//         expect(basePage.authPageIsOpened).true;
//         expect(basePage.authPageIsOpened).exist;
//         expect(basePage.profileUser.getText()).to.equals(validUser.email);
//         expect(basePage.profileDropdown
//                             .getAttribute('nc-dropdown-trigger')).to.equals('statusOpened');
//         basePage.clickLogOut();
//         expect(basePage.basePageIsOpened, 'Home page was not opened').true;
//     });
//
//     beforeEach(() => {
//         console.log('RUN before test LOGIN');
//         basePage.open;
//         expect(basePage.basePageIsOpened, 'Home page was not opened').true;
//         basePage.loginButton.click();
//         expect(LoginPage.isOpened,'Login page was not opened').true;
//     });
//     it('should not allow access with invalid email', () => {
//         console.log('START4');
//         expect(LoginPage.isOpened, 'Login page was not opened').true;
//         LoginPage.loginWithCredentials(inValidUser.email, inValidUser.password);
//         expect(LoginPage.isOpened, 'Login page was not opened').true;
//         expect(LoginPage.boxErrorEmail.getText()).to.equals(inValidUser.message);
//     });
//
//     it('Log Out. Should redirected on authorization page', () => {
//         console.log('START5');
//         Utils.loginToSite();
//         expect(basePage.authPageIsOpened).true;
//         basePage.clickLogOut();
//         expect(LoginPage.isOpened) ;
//     });
//
//    beforeEach(() => {
//         console.log('RUN before test LOGIN');
//         basePage.open;
//         expect(basePage.basePageIsOpened, 'Home page was not opened').true;
//         basePage.loginButton.click();
//         expect(LoginPage.isOpened,'Login page was not opened').true;
//     });
//     afterEach( () => {
//         browser.refresh();
//     });
// });
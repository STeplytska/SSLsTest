import {expect} from 'chai';
import BasicAuthPage from 'src/pages/BasicAuthPage';
import SearchPage from 'src/pages/SearchPage';
import Utils from 'src/Utils/Utils';

describe('Home page. Checking filtering function', () => {
    const basePage = new BasicAuthPage();

    it('after filtering should display only elements with required a parameter (Validation)', () => {
        basePage.clickButtonBasicFast();
        expect(Utils.checkContains(basePage.filteredListValidation,
            'DOMAIN VALIDATION'), 'Not all items match the filter').true;
        basePage.clickButtonBasicFast();
    });

    it('after filtering should display only elements' +
        ' with required two parameters (Validation and Subdomains)', () => {
        basePage.clickButtonBusiness();
        basePage.clickButtonOneSite();
        expect(Utils.checkContains(basePage.filteredListValidation,
            'ORGANIZATION VALIDATION'), 'Not all items match the filter').true;
        expect(Utils.checkContains(basePage.filteredListSubdomains,
            '1 DOMAIN'), 'Not all items match the filter').true;
        basePage.clickButtonBusiness();
        basePage.clickButtonOneSite();
    });

    it('filtering with used button magnifier', () => {
        basePage.clickButtonMagnifier();
        expect(SearchPage.isOpened(), 'Base page was NOT opened').true;
        SearchPage.searchField.setValue('esse');
        expect(Utils.checkContains(SearchPage.filteredListProductCards,
            'ESSE'), 'Not all items match the filter').true;
    });

    beforeEach(() => {
        console.log('RUN before test');
        basePage.open;
        expect(basePage.basePageIsOpened, 'Base page was NOT opened').true;
    });

    afterEach(() => {
        browser.refresh();
    });
});
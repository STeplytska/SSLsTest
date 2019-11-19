import BasePage from 'src/pages/BasePage';

class SearchPage extends BasePage {

    get titleSearchPage() {
        return $('h5.ssls-home-page-h1').getText();
    }

    get searchField() {
        return $('.ssls-input');
    }

    get filteredListProductCards() {
        return $$('.ssls-product-card__title');
    }

    isOpened() {
        return this.titleSearchPage.includes('Search products');
    }
}

export default new SearchPage();
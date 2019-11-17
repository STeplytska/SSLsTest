export default class BasePage {
    get titlePage() {
        return $('h1');
    }

    get title() {
        this.titlePage.waitForDisplayed();
        return $('h1').getText();
    }
}

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    //noinspection TypeScriptUnresolvedFunction
    return element(by.css('app-root')).getText();
  }
}

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getEmail(){
    return  element(by.id ('email'));
  }
  getPassword(){
    return element(by.id('password'));
  }


}

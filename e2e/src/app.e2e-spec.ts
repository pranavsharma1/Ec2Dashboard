import { AppPage } from './app.po';
import {by, element, browser} from "protractor";

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should not allow signin', () => {
    page.navigateTo();
    let email = page.getEmail();
    let password = page.getPassword();
    email.sendKeys('pranav081299@gmail.com');
    password.sendKeys('pannusharma');
    element(by.id('signinbtn')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/signin');
  });

  it('should allow signin', () => {
    page.navigateTo();
    let email = page.getEmail();
    let password = page.getPassword();
    email.sendKeys('admin@dashboard.com');
    password.sendKeys('Hello123');
    let currentUrlDashboard = element(by.id('signinbtn')).click().then(()=>{
      return browser.driver.wait(() =>{
        return browser.getCurrentUrl();
      },10000)
    });
    expect(currentUrlDashboard).toBe('http://localhost:4200/dashboard');
  });

 /* it('should allow search', () => {
    page.navigateTo();
    let email = page.getEmail();
    let password = page.getPassword();
    email.sendKeys('admin@dashboard.com');
    password.sendKeys('Hello123');
    element(by.id('signinbtn')).click().then(()=>{
      return browser.driver.wait(() =>{
        return browser.getCurrentUrl();
      },2000)
    });
    let searchText = element(by.id('searchBar'));
    searchText.sendKeys('europe');
    expect().toBe('http://localhost:4200/signin');
  });*/




  it('should allow logout', () => {
    page.navigateTo();
    let email = page.getEmail();
    let password = page.getPassword();
    email.sendKeys('admin@dashboard.com');
    password.sendKeys('Hello123');
    element(by.id('signinbtn')).click().then(()=>{
      return browser.driver.wait(() =>{
        return browser.getCurrentUrl();
      })
    });
    let currentUrlsignin = element(by.id('logout')).click().then(()=>{
      return browser.driver.wait(() =>{
        return browser.getCurrentUrl();
      })
    });
    expect(currentUrlsignin).toBe('http://localhost:4200/signin');
  });



});

import { AppPage } from './app.po';
import jasmine = require('jasmine');



jasmine.describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    jasmine.expect(page.getTitleText()).toEqual('public');
  });
});

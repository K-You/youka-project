import { YoukaProjectPage } from './app.po';

describe('youka-project App', () => {
  let page: YoukaProjectPage;

  beforeEach(() => {
    page = new YoukaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

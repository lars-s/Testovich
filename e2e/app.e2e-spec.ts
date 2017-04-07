import { TestovichPage } from './app.po';

describe('testovich App', () => {
  let page: TestovichPage;

  beforeEach(() => {
    page = new TestovichPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

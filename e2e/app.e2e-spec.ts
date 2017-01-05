import { GadaproductionsPage } from './app.po';

describe('gadaproductions App', function() {
  let page: GadaproductionsPage;

  beforeEach(() => {
    page = new GadaproductionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

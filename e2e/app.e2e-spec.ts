import { MoviesPage } from './app.po';

describe('movies App', function() {
  let page: MoviesPage;

  beforeEach(() => {
    page = new MoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});

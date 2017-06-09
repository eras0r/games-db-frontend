import { GamesDbFrontendPage } from './app.po';

describe('games-db-frontend App', () => {
  let page: GamesDbFrontendPage;

  beforeEach(() => {
    page = new GamesDbFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

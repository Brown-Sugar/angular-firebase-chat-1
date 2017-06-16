import { FirebaseChatFinalPage } from './app.po';

describe('firebase-chat-final App', () => {
  let page: FirebaseChatFinalPage;

  beforeEach(() => {
    page = new FirebaseChatFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

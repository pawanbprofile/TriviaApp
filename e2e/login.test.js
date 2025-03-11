describe('detox test to login user', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('launch the app and login', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
    await element(by.id('name-field')).typeText('emilys');
    await element(by.id('password-field')).typeText('emilyspass');
    // await waitFor(element(by.text('Login')))
    //   .toBeVisible()
    //   .toBeEnabled()
    //   .withTimeout(3000);
    await element(by.text('Login')).tap();
  });

  it('navigate to home screen', async () => {
    await expect(element(by.id('EASY'))).toBeVisible();
  });
});

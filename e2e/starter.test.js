describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      launchArgs: {CLEAR_KEYCHAIN: 'true'},
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should launch login screen', async () => {
    await element(by.id('name-field')).typeText('emilys');
    await element(by.id('password-field')).typeText('emilyspass');
    await element(by.id('login-screen')).takeScreenshot();
    await element(by.id('login-button')).tap();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});

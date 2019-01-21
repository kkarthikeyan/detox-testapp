describe('Example', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
  });

  it('should show welcome label', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should greet on clicking submit', async () => {
    await element(by.id('firstName')).replaceText('Karthik');
    await element(by.id('lastName')).replaceText('Kailasam');
    // await element(by.id('scrollView')).scrollTo('bottom');
    await element(by.id('scrollView')).swipe('up', 'fast', 0.9);
    await element(by.text('Overflow')).tap();
    await element(by.label('OK').and(by.type('_UIAlertControllerActionView'))).tap();
    // await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})
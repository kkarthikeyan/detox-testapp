let okButton, welcomeAlertTitle;

describe('Example', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
    okButton = (device.getPlatform() === 'ios')
      ? by.label('OK').and(by.type('_UIAlertControllerActionView'))
      : by.text('OK');
    welcomeAlertTitle = (device.getPlatform() === 'ios')
      ? by.text('Welcome').withAncestor(by.type('_UIAlertControllerView'))
      : by.text('Welcome');
  });

  //it('should show welcome label', async () => {
  //  await expect(element(by.id('welcome'))).toBeVisible();
  //});

  it('should greet on clicking submit', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();

    await element(by.id('firstName')).replaceText('Karthik');
    await element(by.id('lastName')).replaceText('Kailasam');
    await element(by.id('submitButton')).tap();

    await expect(element(welcomeAlertTitle)).toBeVisible();
    await expect(element(by.text('Hello Karthik Kailasam!'))).toBeVisible();
    await element(okButton).tap();

    await element(by.id('scrollView')).scrollTo('bottom');
    // await element(by.id('scrollView')).swipe('up', 'fast', 0.9);
    await element(by.text((device.getPlatform() === 'ios')?'Overflow':'OVERFLOW')).tap();
    await element(okButton).tap();
  });
})
